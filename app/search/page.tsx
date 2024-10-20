import _ from 'lodash';
import { allPosts, Post } from '.contentlayer/generated';
import SearchResults from './components/SearchResults';

export const metadata = { title: 'Search Results' };

export default function SearchPage({ searchParams }: { searchParams: { query?: string } }) {
  const searchTerm = searchParams.query;

  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  const cleanedPosts = posts.map((post) => _.omit(post, ['_raw']));

  return <SearchResults posts={cleanedPosts as Post[]} searchTerm={searchTerm} />;
}
