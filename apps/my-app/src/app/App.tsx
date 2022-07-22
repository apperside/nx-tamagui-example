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
      {/* <YStack f={1} bc="$background" jc="center" ai="center" p="$4" space>
        <YStack space="$4" maw={600}>
          <H1 ta="center">Welcome to Tamagui.</H1>
          <Paragraph ta="center">
            Here is a basic starter to show navigating from one screen to
            another. This screen uses the same code on Next.js and React Native.
          </Paragraph>
          <MyComponent />
          <Separator />
          <Paragraph ta="center">
            Tamagui is made by{' '}
            <Anchor href="https://twitter.com/natebirdman" target="_blank">
              Nate Wienert
            </Anchor>
            , give it a star{' '}
            <Anchor
              href="https://github.com/tamagui/tamagui"
              target="_blank"
              rel="noreferrer"
            >
              on Github
            </Anchor>
          </Paragraph>
        </YStack>
        <MyCard p="$3" br="$1">
          <H5>This is my custom component</H5>
        </MyCard>
        <XStack>
          <Button href="/user/nate">Link to user</Button>
        </XStack>
      </YStack> */}
    </Tamagui.Provider>
  );
};
export default App;
