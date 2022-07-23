import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Button,
  H5,
  YStack
} from "@nx-tamagui-example/ui";
import { TextLink } from "solito/link";
import * as Linking from "expo-linking";
import {
  NavigationContainer,
  useNavigation
} from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return <YStack>
    <H5>HOME</H5>
    <Button onPress={() => {
      navigation.navigate("user-detail");
    }}>toggle</Button>
    <TextLink href="/user/simo" style={{ backgroundColor: "red" }}><H5 selectable={false} fontSize={16} color="black" fontWeight="bold">Moti Link</H5></TextLink>
  </YStack>;
};
const UserDetails = () => {
  return <H5>User detail</H5>;
};
const Stack = createNativeStackNavigator();
function NativeNavigation() {
  return <NavigationContainer onUnhandledAction={() => alert("unhandled")} linking={{
    prefixes: [Linking.createURL("myapp://")],
    config: {
      initialRouteName: "user-detail",
      screens: {
        home: "",
        "user-detail": "user/:id"
      }
    }
  }}><Stack.Navigator>
    <Stack.Screen name="home" component={HomeScreen} options={{
      title: "Home"
    }} />
    <Stack.Screen name="user-detail" component={UserDetails} options={{
      title: "User"
    }} />
  </Stack.Navigator></NavigationContainer>;
}
export {
  NativeNavigation
};
//# sourceMappingURL=HomePage copy.js.map
