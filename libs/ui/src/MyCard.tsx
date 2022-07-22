import { Stack, StackPropsBase, styled, Text } from 'tamagui';

import React from 'react';

type Props = { children: any };

export function MyCard({ children, ...props }: Props & StackPropsBase) {
  return (
    <Stack br="$4" {...props} bc="$myColor" minHeight={10}>
      {children}
    </Stack>
  );
}
