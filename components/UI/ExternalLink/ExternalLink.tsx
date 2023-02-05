import { Button } from '@mui/material';

type Props = { link: string; text: string };

const ExternalLink = ({ link, text }: Props) => {
  return (
    <a
      href={link}
      target='_blank'
      rel='noreferrer'
      style={{ textDecoration: 'none' }}
    >
      <Button variant='outlined' color='primary' sx={{ textTransform: 'none' }}>
        {text}
      </Button>
    </a>
  );
};

export default ExternalLink;
