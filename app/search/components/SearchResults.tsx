'use client';

import { useMemo } from 'react';
import { Post } from '.contentlayer/generated';
import Cards from 'components/UI/Cards/Cards';

type Props = {
  posts: Post[];
  searchTerm?: string;
};

export default function SearchResults({ posts, searchTerm }: Props) {
  const filteredPosts = useMemo(() => {
    if (!searchTerm) return posts;

    return posts.filter((post) => {
      const value = searchTerm.toLowerCase();
      return (
        post.body.raw.toLowerCase().includes(value) ||
        post.title.toLowerCase().includes(value) ||
        post.tags.join('').toLowerCase().includes(value)
      );
    });
  }, [posts, searchTerm]);

  return (
    <div className="my-4">
      <h1 className="mb-8 text-2xl text-center text-white">
        {searchTerm ? `Search results for "${searchTerm}"` : 'Blog Posts'}
      </h1>
      {filteredPosts.length === 0 && searchTerm && <p className="my-5">No results!! Try another term.</p>}
      <Cards posts={filteredPosts} />
    </div>
  );
}
