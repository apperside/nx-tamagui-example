import {
  Anchor, H1, MyComponent, Paragraph,
  Separator,
  XStack,
  YStack
} from '@nx-tamagui-example/ui';
import { TextLink } from 'solito/link';
import { Label } from 'tamagui';
import React from "react"

export const HomeScreen = () => {

  return (
    <YStack f={1} jc="center" ai="center" p="$4" space>
      <YStack space="$4" maw={600}>
        <H1 ta="center">Welcome to Tamagui.</H1>
        <Paragraph ta="center">
          Here is a basic starter to show navigating from one screen to another.
          This screen uses the same code on Next.js and React Native.
        </Paragraph>
        <MyComponent ta="center" >this is a custom component with a custom color </MyComponent>
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
          .
        </Paragraph>
        <Paragraph ta="center">
          This app is made by{' '}
          <Anchor href="https://apperside.com" target="_blank">
            Apperside
          </Anchor>
          , give it a star{' '}
          <Anchor
            href="https://github.com/apperside/nx-tamagui-example"
            target="_blank"
            rel="noreferrer"
          >
            on Github
          </Anchor>
          .
        </Paragraph>
      </YStack>

      <XStack>
        {/* <Button href={'/user/nate'}>Link to user</Button> */}
        <TextLink style={{color:"white"}} href="/user/apperside"><Label color="$blue10" cursor={"pointer"}>Link to user detail screen</Label></TextLink>
      </XStack>
    </YStack>
  );
};

export default HomeScreen;
