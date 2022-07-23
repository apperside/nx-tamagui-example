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
import React from 'react';
import { Label } from 'tamagui';
import { TextLink } from 'solito/link';
import { MotiView } from 'moti';
import * as Linking from 'expo-linking';
import {HomeScreen,UserDetails} from "@nx-tamagui-example/ui"

import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import {
  Link,
  NavigationContainer,
  useNavigation,
} from '@react-navigation/native';


const Stack = createNativeStackNavigator<{
  home: undefined;
  'user-detail': {
    id: string;
  };
}>();

export function NativeNavigation() {
  return (
    <NavigationContainer
      onUnhandledAction={() => alert('unhandled')}
      linking={{
        prefixes: [Linking.createURL('myapp://')],
        config: {
          initialRouteName: 'user-detail',
          screens: {
            home: '',
            'user-detail': 'user/:id',
          },
        },
      }}
    >
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
    </NavigationContainer>
  );
}
