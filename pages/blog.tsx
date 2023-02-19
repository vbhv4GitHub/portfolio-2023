import { useMemo } from 'react';
import dynamic from 'next/dynamic';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';
import Text from 'components/UI/MuiComponents/Text';
import { allPosts, Post } from '.contentlayer/generated';

const PaginatedCards = dynamic(() => import('components/UI/PaginatedCards/PaginatedCards'));

type Props = { posts: Post[] };

const Home: NextPage<Props> = ({ posts }: Props) => {
  const router = useRouter();
  const searchTerm = router.query?.search;
  const filterPostsBySearchTerm = (): Post[] => {
    if (!Boolean(searchTerm)) return posts;

    return posts.filter((post) => {
      const term = searchTerm as string;
      const value = term?.toLowerCase();

      if (post.body.raw.toLowerCase().includes(value)) return true;
      if (post.title.toLowerCase().includes(value)) return true;
      if (post.tags.join('').toLowerCase().includes(value)) return true;

      return false;
    });
  };

  const filteredPosts = useMemo(filterPostsBySearchTerm, [posts, searchTerm]);
  return (
    <>
      <Title title={searchTerm ? 'Search Results' : 'Blog Posts'} />
      <Header>{searchTerm ? `Search results for "${searchTerm}"` : `Blog Posts`}</Header>
      {filteredPosts.length === 0 && searchTerm && <Text sx={{ my: 5 }}> No results!! Try another term.</Text>}
      <PaginatedCards posts={filteredPosts} />
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  return { props: { posts } };
}
