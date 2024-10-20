import React from 'react';
import { Post } from 'contentlayer/generated';
import Card from 'components/UI/Cards/Card/Card';

type Props = { posts: Post[] };

const Cards = ({ posts }: Props) => {
  if (posts.length === 0) return null;

  return (
    <div className="flex flex-col gap-8">
      {posts.map((post: Post) => (
        <div key={post.slug} className="w-full">
          <Card {...post} />
        </div>
      ))}
    </div>
  );
};

export default Cards;
