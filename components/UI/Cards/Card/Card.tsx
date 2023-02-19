import dayjs from 'dayjs';
import theme from 'theme';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { Post } from 'contentlayer/generated';
import { Chip, Stack, CardHeader, CardContent, Card as MuiCard, Typography } from '@mui/material';

// Dynamic imports
const EventIcon = dynamic(() => import('@mui/icons-material/Event'));
const IconWithText = dynamic(() => import('components/UI/IconWithText/IconWithText'));
const LocalOfferOutlinedIcon = dynamic(() => import('@mui/icons-material/LocalOfferOutlined'));

const CardSubheader = ({ date }: { date: string }) => {
  return (
    <IconWithText
      icon={<EventIcon />}
      text={dayjs(date).format('MMMM D, YYYY')}
      typographyProps={{ variant: 'subtitle2' }}
      stackProps={{ sx: { mt: 2 } }}
    />
  );
};

const Card = (post: Post) => {
  return (
    <MuiCard sx={{ maxWidth: 'xl' }} elevation={3}>
      <CardHeader
        component={Link}
        className="hover:text-blue-300"
        title={post.title}
        href={`/posts/${post.slug}`}
        subheader={<CardSubheader date={post.date} />}
        titleTypographyProps={{ fontSize: 18, fontWeight: 600, noWrap: true }}
      />

      <CardContent>
        <Typography
          variant="body1"
          color="text.secondary"
          sx={{
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {post.description}
        </Typography>
        <Stack sx={{ mt: 2 }} flexDirection="row">
          <LocalOfferOutlinedIcon sx={{ color: theme.palette.text.secondary, mr: 1 }} />
          {post.tags.map((tag: string, idx: number) => (
            <Chip label={tag} key={idx} sx={{ mr: 1, mb: 1 }} size="small" />
          ))}
        </Stack>
      </CardContent>
    </MuiCard>
  );
};

export default Card;
