import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Button,
  H5,
  YStack
} from "@nx-tamagui-example/ui";
import React from "react";
import { TextLink } from "solito/link";
import * as Linking from "expo-linking";
import {
  NavigationContainer,
  useNavigation
} from "@react-navigation/native";
const HomeScreen = () => {
  const navigation = useNavigation();
  return /* @__PURE__ */ React.createElement(YStack, null, /* @__PURE__ */ React.createElement(H5, null, "HOME"), /* @__PURE__ */ React.createElement(Button, {
    onPress: () => {
      navigation.navigate("user-detail");
    }
  }, "toggle"), /* @__PURE__ */ React.createElement(TextLink, {
    href: "/user/simo",
    style: { backgroundColor: "red" }
  }, /* @__PURE__ */ React.createElement(H5, {
    selectable: false,
    fontSize: 16,
    color: "black",
    fontWeight: "bold"
  }, "Moti Link")));
};
const UserDetails = () => {
  return /* @__PURE__ */ React.createElement(H5, null, "User detail");
};
const Stack = createNativeStackNavigator();
function NativeNavigation() {
  return /* @__PURE__ */ React.createElement(NavigationContainer, {
    onUnhandledAction: () => alert("unhandled"),
    linking: {
      prefixes: [Linking.createURL("myapp://")],
      config: {
        initialRouteName: "user-detail",
        screens: {
          home: "",
          "user-detail": "user/:id"
        }
      }
    }
  }, /* @__PURE__ */ React.createElement(Stack.Navigator, null, /* @__PURE__ */ React.createElement(Stack.Screen, {
    name: "home",
    component: HomeScreen,
    options: {
      title: "Home"
    }
  }), /* @__PURE__ */ React.createElement(Stack.Screen, {
    name: "user-detail",
    component: UserDetails,
    options: {
      title: "User"
    }
  })));
}
export {
  NativeNavigation
};
//# sourceMappingURL=HomePage copy.js.map
