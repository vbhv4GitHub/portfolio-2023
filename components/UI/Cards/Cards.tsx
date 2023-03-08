import React from 'react';
import Grid from '@mui/material/Grid';
import { Post } from 'contentlayer/generated';
import Card from 'components/UI/Cards/Card/Card';

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
