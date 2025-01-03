import _ from 'lodash';
import { Metadata } from 'next';
import Header from 'components/Layout/Header';
import Cards from 'components/UI/Cards/Cards';
import { POSTS_PER_PAGE } from 'types/constants';
import { allPosts, Post } from '.contentlayer/generated';
import MuiPagination from 'components/UI/Components/Pagination';

export const metadata: Metadata = {
  title: 'Blog Posts',
};

type Props = { params: Promise<{ page: string }> };

export default async function BlogPage(props: Props) {
  const params = await props.params;
  const pageNo = parseInt(params.page);
  const posts = getPosts(pageNo);
  const pageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  return (
    <>
      <Header>Blog Posts</Header>

      <MuiPagination totalPages={pageCount} path="/blog" currentPage={pageNo} />
      <Cards posts={posts as Post[]} />
      <MuiPagination totalPages={pageCount} path="/blog" currentPage={pageNo} />
    </>
  );
}

function getPosts(pageNo: number): Omit<Post, 'body' | '_raw'>[] {
  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());
  const idx = pageNo - 1;
  const startIndex = idx * POSTS_PER_PAGE;
  const endIndex = pageNo * POSTS_PER_PAGE;
  const rawPosts = posts.slice(startIndex, endIndex);
  return rawPosts.map((post) => _.omit(post, ['body', '_raw']));
}

export async function generateStaticParams() {
  const totalPageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPageCount }, (_, i) => ({ page: `${i + 1}` }));
}
