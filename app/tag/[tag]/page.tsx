import _ from 'lodash';
import { Metadata } from 'next';
import Header from 'components/Layout/Header';
import Cards from 'components/UI/Cards/Cards';
import { allPosts, Post } from '.contentlayer/generated';

type Props = { params: { tag: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: params.tag };
}

export default function TagPage({ params }: Props) {
  const { tag } = params;
  const posts = allPosts.sort((p1, p2) => new Date(p2.date).getTime() - new Date(p1.date).getTime());

  const taggedPosts = posts
    .map((post) => _.omit(post, ['body', '_raw']) as Post)
    .filter((post) => post.tags.includes(tag));

  return (
    <>
      <Header>{`Posts with tag "${tag}"`}</Header>
      <Cards posts={taggedPosts} />
    </>
  );
}

export async function generateStaticParams() {
  const allTags = allPosts.flatMap((post) => post.tags);
  const uniqueTags = [...new Set(allTags)];

  return uniqueTags.map((tag) => ({ tag }));
}
