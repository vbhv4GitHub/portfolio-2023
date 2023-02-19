import dayjs from 'dayjs';
import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';
import { allPosts, Post } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Box, Chip, Stack, Container } from '@mui/material';
import InternalLink from 'components/UI/InternalLink/InternalLink';
import ExternalLink from 'components/UI/ExternalLink/ExternalLink';

const EventIcon = dynamic(() => import('@mui/icons-material/Event'));
const IconWithText = dynamic(() => import('components/UI/IconWithText/IconWithText'));
const LocalOfferOutlinedIcon = dynamic(() => import('@mui/icons-material/LocalOfferOutlined'));

type Props = { post: Post };

const components = { InternalLink, ExternalLink };

const DetailedPost = ({ post }: Props) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <>
      <Title title={post.title} />
      <Header>{post.title}</Header>
      <Stack flexDirection={{ sm: 'column', xs: 'column', md: 'row' }} maxWidth="640px" mb={1} sx={{ mx: 'auto' }}>
        <IconWithText
          icon={<EventIcon />}
          text={dayjs(post.date).format('MMMM D, YYYY')}
          typographyProps={{ variant: 'body2' }}
        />
      </Stack>
      <Stack flexDirection="row" maxWidth="640px" gap={1} sx={{ mx: 'auto' }}>
        <LocalOfferOutlinedIcon />
        <Box>
          {post.tags.map((tag: string) => (
            <Chip label={tag} key={tag} sx={{ mr: 1 }} size="small" />
          ))}
        </Box>
      </Stack>
      <Container className="prose prose-invert" sx={{ mt: 5 }}>
        <MDXContent components={components} />
      </Container>
    </>
  );
};

export default DetailedPost;

export async function getStaticProps({ params }: any) {
  const post = allPosts.find((post) => post.slug === params.slug);
  return { props: { post } };
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}
