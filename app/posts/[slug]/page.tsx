import _ from 'lodash';
import dayjs from 'dayjs';
import { Metadata } from 'next';
import { FaTag } from 'react-icons/fa';
import { notFound } from 'next/navigation';
import { FaCalendarDay } from 'react-icons/fa6';
import { allPosts } from '.contentlayer/generated';
import { MDXContent } from 'components/MDXContent';
import TagCapsule from 'components/UI/Components/TagCapsule';

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) return {};
  return { title: post.title };
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const post = allPosts.find((post) => post.slug === params.slug);
  if (!post) notFound();

  const cleanedPost = _.omit(post, ['_raw']);

  return (
    <div className="max-w-2xl mx-auto text-white">
      <h1 className="mb-8 text-3xl font-bold">{post.title}</h1>
      <div className="flex items-center mb-2">
        <span className="mr-3">
          <FaCalendarDay className="w-5 h-5" />
        </span>
        <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-3">
          <FaTag className="w-5 h-5" />
        </span>
        <div>
          {post.tags.map((tag: string, idx: number) => (
            <TagCapsule href={`/blog/tag/${tag}`} key={idx}>
              {tag}
            </TagCapsule>
          ))}
        </div>
      </div>
      <div className="mt-8 prose prose-invert">
        {cleanedPost.body.code && <MDXContent code={cleanedPost.body.code} />}
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({ slug: post.slug }));
}
