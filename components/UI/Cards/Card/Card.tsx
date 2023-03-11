import dayjs from 'dayjs';
import theme from 'theme';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Post } from 'contentlayer/generated';
import TagCapsule from 'components/UI/MuiComponents/TagCapsule';
import { Stack, CardHeader, CardContent, Card as MuiCard, Typography } from '@mui/material';

// Dynamic imports
const EventIcon = dynamic(() => import('@mui/icons-material/Event'));
const IconWithText = dynamic(() => import('components/UI/IconWithText/IconWithText'));
const LocalOfferOutlinedIcon = dynamic(() => import('@mui/icons-material/LocalOfferOutlined'));

const CardSubheader = ({ date }: { date: string }) => {
  return (
    <IconWithText
      icon={<EventIcon />}
      stackProps={{ sx: { mt: 2 } }}
      text={dayjs(date).format('MMMM D, YYYY')}
      typographyProps={{ variant: 'subtitle2', color: 'secondary' }}
    />
  );
};

const Card = (post: Post) => {
  return (
    <MuiCard sx={{ maxWidth: 'md', mx: 'auto' }} elevation={3}>
      <CardHeader
        component={Link}
        title={post.title}
        href={`/posts/${post.slug}`}
        className="hover:text-blue-300"
        color={theme.palette.primary.main}
        subheader={<CardSubheader date={post.date} />}
        titleTypographyProps={{ fontSize: 18, fontWeight: 600, noWrap: true }}
      />

      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            overflow: 'hidden',
            WebkitLineClamp: 3,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
          }}
        >
          {post.description}
        </Typography>
        <Stack sx={{ mt: 2 }} flexDirection="row">
          <LocalOfferOutlinedIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
          {post.tags.map((tag: string, idx: number) => (
            <TagCapsule label={tag} href={`/blog/tag/${tag}`} key={idx} />
          ))}
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
