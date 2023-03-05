import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import theme from 'theme';

export default function BriefIntroduction() {
  return (
    <Container sx={{ my: 10 }}>
      <Typography variant="h2" fontWeight={700} sx={{ px: { md: '25%' } }}>
        Hi, I&apos;m&nbsp;
        <Typography
          variant="h2"
          fontWeight={700}
          component="span"
          display="inline"
          color={theme.palette.secondary.main}
        >
          Vaibhav
        </Typography>
      </Typography>
      <Typography variant="h5" fontWeight={600} color={theme.palette.primary.main} sx={{ px: { md: '25%' } }}>
        A Fullstack Web Developer
      </Typography>
      <Typography variant="body1" sx={{ px: { md: '25%' }, mt: 2 }}>
        &emsp;&emsp;I&apos;ve almost two year&apos;s hands-on experience working on a fin-tech application. My current
        tech stack includes React with MaterialUI on frontend with Hapi, Postgres with TypeORM on backend. I&apos;ve
        also spent fair share of time working with NextJS, Tailwind, Express, MongoDB & Prisma on some of my pet
        projects.
      </Typography>
    </Container>
  );
}
