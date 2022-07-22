import { Stack, styled, Text } from 'tamagui'

import React from 'react'

type Props = {children:any}

export function MyCard({children}: Props) {
  return (
    <Stack br="$4" bc="$myColor" minHeight={10}>{children}</Stack>
  )
}