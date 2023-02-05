import React from 'react';
import dynamic from 'next/dynamic';
import { Post } from 'contentlayer/generated';

// Dynamic imports
const Grid = dynamic(() => import('@mui/material/Grid'));
const Card = dynamic(() => import('components/UI/Cards/Card/Card'));

type Props = { posts: Post[] };

const Cards = ({ posts }: Props) => {
  if (posts.length === 0) return null;

  return (
    <Grid container spacing={2}>
      {posts?.map((data: Post) => (
        <Grid item key={data.slug} xs={12} sm={12} md={12}>
          <Card {...data} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Cards;
