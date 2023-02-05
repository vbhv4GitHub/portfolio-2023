import dayjs from 'dayjs';
import React from 'react';
import dynamic from 'next/dynamic';
import Header from 'components/Layout/Header';
import { allPosts, Post } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import { Box, Chip, Stack, Container } from '@mui/material';
import InternalLink from 'components/UI/InternalLink/InternalLink';

const EventIcon = dynamic(() => import('@mui/icons-material/Event'));
const MainLayout = dynamic(() => import('components/Layout/MainLayout'));
const IconWithText = dynamic(() => import('components/UI/IconWithText/IconWithText'));
const LocalOfferOutlinedIcon = dynamic(() => import('@mui/icons-material/LocalOfferOutlined'));

type Props = { post: Post };

const components = { InternalLink };

const DetailedPost = ({ post }: Props) => {
  const MDXContent = useMDXComponent(post.body.code);

  return (
    <MainLayout title={post.title}>
      <>
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
            {post.tags.map((tag: string, idx: number) => (
              <Chip label={tag} key={idx} sx={{ mr: 1, mb: 1 }} size="small" />
            ))}
          </Box>
        </Stack>
        <Container className="prose prose-invert">
          <MDXContent components={components} />
        </Container>
      </>
    </MainLayout>
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
