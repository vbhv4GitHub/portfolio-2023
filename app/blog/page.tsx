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

type FilteredPost = Omit<Post, 'body' | '_raw'>;

async function getPosts() {
  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  const pageCount = Math.ceil(allPosts.length / POSTS_PER_PAGE);

  const rawPosts = posts.slice(0, POSTS_PER_PAGE);

  const filteredPosts = rawPosts.map((post) => _.omit(post, ['body', '_raw']));

  return { posts: filteredPosts as FilteredPost[], pageCount };
}

export default async function BlogPage() {
  const { posts, pageCount } = await getPosts();

  return (
    <>
      <Header>Blog Posts</Header>

      <MuiPagination totalPages={pageCount} path="/blog" currentPage={1} />
      <Cards posts={posts as Post[]} />
      <MuiPagination totalPages={pageCount} path="/blog" currentPage={1} />
    </>
  );
}
