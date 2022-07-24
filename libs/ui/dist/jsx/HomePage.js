import {
  Anchor,
  H1,
  MyComponent,
  Paragraph,
  Separator,
  XStack,
  YStack
} from "@nx-tamagui-example/ui";
import { SheetDemo } from "@nx-tamagui-example/ui/src/SheetDemo";
import { TextLink } from "solito/link";
import { Label } from "tamagui";
const HomeScreen = () => {
  return <YStack f={1} jc="center" ai="center" p="$4" space>
    <YStack space="$4" maw={600}>
      <H1 ta="center">Welcome to Tamagui.</H1>
      <Paragraph ta="center">Here is a basic starter to show navigating from one screen to another. This screen uses the same code on Next.js and React Native.</Paragraph>
      <MyComponent />
      <SheetDemo />
      <Separator />
      <Paragraph ta="center">
        {"Tamagui is made by"}
        {" "}
        <Anchor href="https://twitter.com/natebirdman" target="_blank">Nate Wienert</Anchor>
        {", give it a star"}
        {" "}
        <Anchor href="https://github.com/tamagui/tamagui" target="_blank" rel="noreferrer">on Github</Anchor>
        {"."}
      </Paragraph>
      <Paragraph ta="center">
        {"This app is made by"}
        {" "}
        <Anchor href="https://apperside.com" target="_blank">Apperside</Anchor>
        {", give it a star"}
        {" "}
        <Anchor href="https://github.com/apperside/nx-tamagui-example" target="_blank" rel="noreferrer">on Github</Anchor>
        {"."}
      </Paragraph>
    </YStack>
    <XStack><Label color="$blue10" cursor="pointer"><TextLink style={{ color: "white" }} href="/user/apperside">Link to user detail screen</TextLink></Label></XStack>
  </YStack>;
};
var HomePage_default = HomeScreen;
export {
  HomeScreen,
  HomePage_default as default
};
//# sourceMappingURL=HomePage.js.map
