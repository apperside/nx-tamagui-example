/* eslint-disable jsx-a11y/accessible-emoji */
import { config as Tamagui } from '@nx-tamagui-example/config';
import {
  Anchor,
  Button,
  H1,
  H5,
  MyCard,
  MyComponent,
  Paragraph,
  Separator,
  XStack,
  YStack,
} from '@nx-tamagui-example/ui';
import React, { useRef, useState } from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { NativeNavigation } from './navigation';

export const App = () => {
  const [whatsNextYCoord, setWhatsNextYCoord] = useState<number>(0);
  const scrollViewRef = useRef<null | ScrollView>(null);

  return (
    <Tamagui.Provider
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={'light'}
    >
      <NativeNavigation />
      
    </Tamagui.Provider>
  );
};
export default App;
