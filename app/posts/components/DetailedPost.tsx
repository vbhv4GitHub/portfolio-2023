'use client';

import React from 'react';
import dayjs from 'dayjs';
import { Post } from 'contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import TagCapsule from 'components/UI/MuiComponents/TagCapsule';
import InternalLink from 'components/UI/InternalLink/InternalLink';
import ExternalLink from 'components/UI/ExternalLink/ExternalLink';

type Props = {
  post: Post;
};

const components = { InternalLink, ExternalLink };

const DetailedPost = ({ post }: Props) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <div className="max-w-2xl mx-auto text-white">
      <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
      <div className="flex items-center mb-2">
        <span className="mr-2">📅</span>
        <span>{dayjs(post.date).format('MMMM D, YYYY')}</span>
      </div>
      <div className="flex items-center mb-4">
        <span className="mr-2">🏷️</span>
        <div>
          {post.tags.map((tag: string, idx: number) => (
            <TagCapsule href={`/blog/tag/${tag}`} key={idx}>
              {tag}
            </TagCapsule>
          ))}
        </div>
      </div>
      <div className="mt-8 prose prose-invert">
        <MDXContent components={components} />
      </div>
    </div>
  );
};

export default DetailedPost;
