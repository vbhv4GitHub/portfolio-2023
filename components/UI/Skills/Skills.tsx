import Image from 'next/image';
import { Grid, LinearProgress, Typography } from '@mui/material';

const skills = [
  {
    name: 'HTML',
    logo: '/assets/logos/html.png',
    percentage: 92,
  },
  {
    name: 'CSS',
    logo: '/assets/logos/css.png',
    percentage: 86,
  },
  {
    name: 'Javascript',
    logo: '/assets/logos/javascript.png',
    percentage: 82,
  },
  {
    name: 'Typescript',
    logo: '/assets/logos/typescript.png',
    percentage: 78,
  },
  {
    name: 'React',
    logo: '/assets/logos/react.png',
    percentage: 80,
  },
  {
    name: 'NextJS',
    logo: '/assets/logos/next-js.png',
    percentage: 76,
  },
  {
    name: 'NodeJS',
    logo: '/assets/logos/node-js.png',
    percentage: 70,
  },
  {
    name: 'HapiJS',
    logo: '/assets/logos/hapi-js.png',
    percentage: 81,
  },
  {
    name: 'Postgres',
    logo: '/assets/logos/postgres.png',
    percentage: 55,
  },
  {
    name: 'Tailwind',
    logo: '/assets/logos/tailwind.png',
    percentage: 65,
  },
  {
    name: 'Material UI',
    logo: '/assets/logos/material-ui.png',
    percentage: 72,
  },
];

export default function Skills() {
  return (
    <Grid container rowSpacing={5} columnSpacing={{ xs: 1, sm: 2 }} sx={{ marginX: 'auto !important', maxWidth: 'sm' }}>
      {skills.map(({ name, logo, percentage }) => {
        const color = percentage > 85 ? 'success' : percentage > 75 ? 'primary' : percentage > 60 ? 'warning' : 'error';

        return (
          <Grid
            item
            xs={4}
            sm={3}
            key={logo}
            style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}
          >
            <Image alt={name} src={logo} height={55} width={55} />
            <Typography variant="body1" mb={2} mt={1}>
              {name}
            </Typography>
            <LinearProgress
              color={color}
              value={percentage}
              variant="determinate"
              sx={{ height: 8, width: '100%', borderRadius: 5 }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
