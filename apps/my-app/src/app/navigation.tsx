import { createNativeStackNavigator } from '@react-navigation/native-stack';
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
import React from "react";
const HomeScreen = () => {
  return <H5>HOME</H5>;
};

const UserDetails = () => {
  return <H5>User detail</H5>;
};

const Stack = createNativeStackNavigator<{
  home: undefined;
  'user-detail': {
    id: string;
  };
}>();

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Stack.Screen
        name="user-detail"
        component={UserDetails}
        options={{
          title: 'User',
        }}
      />
    </Stack.Navigator>
  );
}
