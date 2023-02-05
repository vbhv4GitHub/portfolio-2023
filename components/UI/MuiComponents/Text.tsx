import React, { ReactNode } from 'react';
import { Typography, TypographyProps } from '@mui/material';

type Props = Omit<TypographyProps, 'component'> & {
  children: ReactNode;
  component?: 'p' | 'span' | 'div';
};

const Text = ({ children, ...rest }: Props) => {
  return (
    <Typography component="p" textAlign="center" {...rest}>
      {children}
    </Typography>
  );
};

export default Text;
