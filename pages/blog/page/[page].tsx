import _ from 'lodash';
import type { NextPage } from 'next';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';
import Cards from 'components/UI/Cards/Cards';
import { POSTS_PER_PAGE } from 'types/constants';
import { allPosts, Post } from '.contentlayer/generated';
import MuiPagination from 'components/UI/MuiComponents/MuiPagination';

type Props = { posts: Post[]; pageCount: number };

const BlogPage: NextPage<Props> = ({ posts, pageCount }: Props) => {
  return (
    <>
      <Title title="Blog Posts" />
      <Header>Blog Posts</Header>

      <MuiPagination count={pageCount} basePath="blog" />
      <Cards posts={posts} />
      <MuiPagination count={pageCount} basePath="blog" />
    </>
  );
};

export default BlogPage;

export async function getStaticProps({ params }: { params: { page: string } }) {
  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  const pageNo = parseInt(params.page);
  const idx = pageNo - 1;
  const startIndex = idx * POSTS_PER_PAGE;
  const endIndex = pageNo * POSTS_PER_PAGE;

  const pageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const rawPosts = posts.slice(startIndex, endIndex);

  const filteredPosts = rawPosts.map((post) => _.omit(post, ['body', '_raw']));

  return { props: { posts: filteredPosts, pageCount } };
}

export async function getStaticPaths() {
  const totalPageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  const pageIntoArray = Array.from(Array(totalPageCount).keys());

  const paths = pageIntoArray.map((path) => {
    return { params: { page: `${path + 1}` } };
  });

  return { paths, fallback: false };
}
