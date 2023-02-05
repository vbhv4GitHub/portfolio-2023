import React from 'react';
import { TypographyProps } from '@mui/material';
import Heading from 'components/UI/MuiComponents/Heading';
import MuiDivider from 'components/UI/MuiComponents/MuiDivider';

type Props = {
  children: React.ReactNode;
} & Omit<TypographyProps, 'componenet'>;

const Header = ({ children, ...rest }: Props) => {
  return (
    <>
      <Heading variant="h5" {...rest}>
        {children}
      </Heading>
      <MuiDivider />
    </>
  );
};

export default Header;
