import React, { ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';

type Props = Omit<TypographyProps, 'component'> & {
  children: ReactNode;
  component?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Heading = ({ children, ...rest }: Props) => {
  return (
    <Typography component="h1" textAlign="center" fontWeight={600} {...rest}>
      {children}
    </Typography>
  );
};

export default Heading;
