import { HomeScreen, UserDetails } from '@nx-tamagui-example/ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as Linking from 'expo-linking';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

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
      <Stack.Navigator
        screenOptions={{
          animation: 'slide_from_right',
        }}
      >
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
