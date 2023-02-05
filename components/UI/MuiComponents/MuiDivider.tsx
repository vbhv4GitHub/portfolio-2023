import React from 'react';
import { Divider, SxProps } from '@mui/material';

type Props = {
  my?: number | string;
  sxProps?: SxProps;
};

const MuiDivider = ({ my, sxProps }: Props) => {
  return <Divider sx={{ my: my || 5, ...sxProps }} />;
};

export default MuiDivider;
