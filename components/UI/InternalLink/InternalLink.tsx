import React from 'react';
import { Button, Link } from '@mui/material';

type Props = {
  children: React.ReactNode;
  href: string;
};

const InternalLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      underline="none"
      sx={{ textDecoration: 'none !important' }}
    >
      <Button variant="outlined" sx={{ textTransform: 'none' }}>
        {props.children}
      </Button>
    </Link>
  );
};

export default InternalLink;
