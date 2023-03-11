import _ from 'lodash';
import { useMemo } from 'react';
import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';
import Cards from 'components/UI/Cards/Cards';
import Text from 'components/UI/MuiComponents/Text';
import { allPosts, Post } from '.contentlayer/generated';

type Props = { posts: Post[] };

const SearchResult: NextPage<Props> = ({ posts }: Props) => {
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

      <Cards posts={filteredPosts} />
    </>
  );
};

export default SearchResult;

export async function getStaticProps() {
  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  const cleanedPosts = posts.map((post) => _.omit(post, ['_raw']));

  return { props: { posts: cleanedPosts } };
}
