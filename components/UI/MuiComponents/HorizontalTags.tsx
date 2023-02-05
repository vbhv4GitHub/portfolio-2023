import React from 'react';
import { Chip, ChipProps, Stack, StackProps } from '@mui/material';

type Props = {
  arr: string[];
  stackProps?: StackProps;
  chipProps?: ChipProps;
};

const HorizontalTags: React.FC<Props> = ({ arr, ...props }) => {
  return (
    <Stack flexDirection='row' {...props.stackProps} justifyContent='center'>
      {arr.map((tag, idx) => (
        <Chip label={tag} key={idx} sx={{ mr: 1, mb: 1 }} size='small' {...props.chipProps} />
      ))}
    </Stack>
  );
};

export default HorizontalTags;
