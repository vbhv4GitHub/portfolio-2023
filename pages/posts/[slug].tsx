import _ from 'lodash';
import dayjs from 'dayjs';
import React from 'react';
import dynamic from 'next/dynamic';
import Title from 'components/SEO/Title';
import Header from 'components/Layout/Header';
import { Box, Stack, Container } from '@mui/material';
import { allPosts, Post } from '.contentlayer/generated';
import { useMDXComponent } from 'next-contentlayer/hooks';
import TagCapsule from 'components/UI/MuiComponents/TagCapsule';
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
          {post.tags.map((tag: string, idx: number) => (
            <TagCapsule label={tag} href={`/blog/tag/${tag}`} key={idx} />
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

  const cleanedPost = _.omit(post, ['_raw']);

  return { props: { post: cleanedPost } };
}

export async function getStaticPaths() {
  const paths = allPosts.map((post) => ({ params: { slug: post.slug } }));

  return { paths, fallback: false };
}
