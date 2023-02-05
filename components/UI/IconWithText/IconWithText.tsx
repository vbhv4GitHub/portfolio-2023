import React from 'react';
import Text from 'components/UI/MuiComponents/Text';
import { Stack, StackProps, TypographyProps } from '@mui/material';

type Props = {
  text: string;
  icon: React.ReactNode;
  typographyProps?: Omit<TypographyProps, 'component'>;
  stackProps?: StackProps;
};

const IconWithText = (props: Props) => {
  return (
    <Stack direction="row" alignItems="center" gap={1} {...props.stackProps}>
      {props.icon}
      <Text component="p" {...props.typographyProps}>
        {props.text}
      </Text>
    </Stack>
  );
};

export default IconWithText;
