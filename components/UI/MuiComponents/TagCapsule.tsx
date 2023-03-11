import React from 'react';
import Link from 'next/link';
import { Chip, ChipProps } from '@mui/material';

type Props = ChipProps & { href: string };

const TagCapsule = ({ href, ...props }: Props) => {
  return (
    <Link href={href}>
      <Chip sx={{ mr: 1, mb: 1, cursor: 'pointer' }} variant="outlined" size="small" {...props} />
    </Link>
  );
};

export default TagCapsule;
