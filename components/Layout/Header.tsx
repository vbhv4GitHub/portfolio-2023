import React from 'react';
import theme from 'theme';
import { TypographyProps } from '@mui/material';
import Heading from 'components/UI/MuiComponents/Heading';
import MuiDivider from 'components/UI/MuiComponents/MuiDivider';

type Props = {
  children: React.ReactNode;
} & Omit<TypographyProps, 'component'>;

const Header = ({ children, ...rest }: Props) => {
  return (
    <>
      <Heading variant="h5" {...rest} color={theme.palette.primary.main}>
        {children}
      </Heading>
      <MuiDivider sxProps={{ width: 480, mx: 'auto' }} />
    </>
  );
};

export default Header;
