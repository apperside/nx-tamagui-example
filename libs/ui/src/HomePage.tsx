import {
  Anchor,
  H1,
  Paragraph,
  Separator,
  XStack,
  YStack,
  Text
} from 'tamagui';
import { TextLink } from 'solito/link';
import React from 'react';
import Sidebar from './Sidebar';
import { Button } from './Button';
import { MyComponent } from './MyComponent';
import { Label } from './Label';



export const HomeScreen = () => {
  return (
    <XStack>
      <Sidebar items={[]} />
      <YStack f={1} jc="center" ai="center" p="$4" space>
        <YStack space="$4" maw={600}>
          <H1 ta="center">Welcome to Tamagui.</H1>
          <Paragraph ta="center">
            Here is a basic starter to show navigating from one screen to
            another. This screen uses the same code on Next.js and React Native.
          </Paragraph>
          <Button  >ciao</Button>
          <Label type="semiBold">Dashboard</Label>
          {/* <Text type="semiBold" >Dashboard</Text> */}
          {/* <Text fontFamily={"$heading"} >Dashboard</Text>
          <Label>A label</Label>
          
          <Label>Another label</Label> */}

          <MyComponent ta="center">
            this is a custom component with a custom color{' '}
          </MyComponent>
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
          <Button />
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
          <TextLink style={{ color: 'white' }} href="/user/apperside">
            <Label color="$blue10" cursor={'pointer'}>
              Link to user detail screen
            </Label>
          </TextLink>
        </XStack>
      </YStack>
    </XStack>
  );
};

export default HomeScreen;
