import _ from 'lodash';
import { useMemo } from 'react';
import type { NextPage } from 'next';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';
import Cards from 'components/UI/Cards/Cards';
import { allPosts, Post } from '.contentlayer/generated';

type Props = { posts: Post[]; tag: string };

const Tag: NextPage<Props> = ({ posts, tag }: Props) => {
  const filterPostsBySearchTerm = (): Post[] => {
    return posts.filter((post) => post.tags.join('').toLowerCase().includes(tag));
  };

  const filteredPosts = useMemo(filterPostsBySearchTerm, [posts, tag]);

  return (
    <>
      <Title title={tag} />
      <Header>{`Posts with tag "${tag}"`}</Header>

      <Cards posts={filteredPosts} />
    </>
  );
};

export default Tag;

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const posts: Post[] = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  const taggedPosts = posts
    .map((post) => _.omit(post, ['body', '_raw']))
    .filter((post) => post.tags.includes(params.tag));

  return { props: { posts: taggedPosts, tag: params.tag } };
}

export async function getStaticPaths() {
  const allTags = allPosts.flatMap((post) => post.tags);

  const uniqueTags = [...new Set(allTags)];

  const paths = uniqueTags.map((tag) => {
    return { params: { tag } };
  });

  return { paths, fallback: false };
}
