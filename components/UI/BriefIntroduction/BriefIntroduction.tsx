import Typography from '@mui/material/Typography';

export default function BriefIntroduction() {
  return (
    <>
      <Typography variant="body1" sx={{ px: { md: '25%' } }}>
        Hello! My name is Vaibhav Yadav, and I am an India-based full stack web developer. If I am not working on a
        client project, I am learning advance typescript tricks, playing chess or writing flash fiction stories for fun.
      </Typography>
      <Typography variant="body1" sx={{ px: { md: '25%' }, mt: 2 }}>
        I&apos;ve over an year&apos;s hands-on experience working on Frontend and Backend for a fintech product. My
        current tech stack is ReactJS on frontend with Hapi & Postgres with TypeORM on backend. I&apos;ve also spent
        fair share of time learning NextJS, Express, MongoDB and Prisma.
      </Typography>
    </>
  );
}
