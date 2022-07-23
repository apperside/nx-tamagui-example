import {
  Button,
  H5,
  YStack
} from "tamagui";
import { TextLink } from "solito/link";
const HomeScreen = () => {
  return <YStack>
    <H5>HOME</H5>
    <Button onPress={() => {
    }}>toggle</Button>
    <TextLink href="/user/simo" style={{ backgroundColor: "red" }}><H5 selectable={false} fontSize={16} color="black" fontWeight="bold">Moti Link</H5></TextLink>
  </YStack>;
};
export {
  HomeScreen
};
//# sourceMappingURL=HomePage.js.map
