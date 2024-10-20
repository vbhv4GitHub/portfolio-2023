import _ from 'lodash';
import { allPosts, Post as PostType } from '.contentlayer/generated';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import DetailedPost from '../components/DetailedPost';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) return {};
  return { title: post.title };
}

export default function Post({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) notFound();

  const cleanedPost = _.omit(post, ['_raw']);

  return <DetailedPost post={cleanedPost as PostType} />;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}
