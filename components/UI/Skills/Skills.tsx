import { LinearProgress, Stack, Typography } from '@mui/material';

export default function Skills() {
  return (
    <Stack gap={2} px={{ xs: 0, sm: '10%', md: '25%' }}>
      <Stack gap={1}>
        <Typography variant="body1"> HTML </Typography>
        <LinearProgress variant="determinate" color="primary" value={92} />
      </Stack>
      <Stack gap={1}>
        <Typography variant="body1"> CSS </Typography>
        <LinearProgress variant="determinate" color="primary" value={88} />
      </Stack>
      <Stack gap={1}>
        <Typography variant="body1"> Typescript </Typography>
        <LinearProgress variant="determinate" color="primary" value={80} />
      </Stack>
      <Stack gap={1}>
        <Typography variant="body1"> ReactJS </Typography>
        <LinearProgress variant="determinate" color="primary" value={78} />
      </Stack>
      <Stack gap={1}>
        <Typography variant="body1"> HapiJS </Typography>
        <LinearProgress variant="determinate" color="primary" value={82} />
      </Stack>
    </Stack>
  );
}
