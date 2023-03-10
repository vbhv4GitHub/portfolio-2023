import _ from 'lodash';
import type { NextPage } from 'next';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';
import Cards from 'components/UI/Cards/Cards';
import { POSTS_PER_PAGE } from 'types/constants';
import { allPosts, Post } from '.contentlayer/generated';
import MuiPagination from 'components/UI/MuiComponents/MuiPagination';

type Props = { posts: Post[]; pageCount: number };

const Blog: NextPage<Props> = ({ posts, pageCount }: Props) => {
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

export default Blog;

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  const pageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const rawPosts = posts.slice(0, POSTS_PER_PAGE);

  const filteredPosts = rawPosts.map((post) => _.omit(post, ['body', '_raw']));

  return { props: { posts: filteredPosts, pageCount } };
}
