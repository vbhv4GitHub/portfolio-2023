import dayjs from 'dayjs';
import theme from 'theme';
import Router from 'next/router';
import dynamic from 'next/dynamic';
import { Post } from 'contentlayer/generated';
import { Chip, Stack, CardHeader, CardContent, CardActionArea, Card as MuiCard, Typography } from '@mui/material';

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
  const postLink = `/posts/${post.slug}`;
  return (
    <MuiCard sx={{ maxWidth: 'xl' }} elevation={3}>
      <CardHeader
        title={post.title}
        titleTypographyProps={{ fontSize: 18, fontWeight: 600, noWrap: true }}
        subheader={<CardSubheader date={post.date} />}
      />

      <CardActionArea onClick={() => Router.push(postLink)}>
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
      </CardActionArea>
    </MuiCard>
  );
};

export default Card;
