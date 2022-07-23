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
import Animated, {
  useSharedValue,
  withTiming,
  useAnimatedStyle,
  Easing,
} from 'react-native-reanimated';
import { Link, NavigationContainer, useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  //   const randomWidth = useSharedValue(10);
  //   const config = {
  //     duration: 500,
  //     easing: Easing.bezier(0.5, 0.01, 0, 1),
  //   };
  //   const style = useAnimatedStyle(() => {
  //     return {
  //       width: withTiming(randomWidth.value, config),
  //     };
  //   });
  const navigation = useNavigation();
  return (
    <YStack>
      <H5>HOME</H5>
      {/* <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing' }}
      >
        <Label
          selectable={false}
          fontSize={16}
          color="black"
          fontWeight={'bold'}
        >
          Moti anumated Link
        </Label>
      </MotiView> */}
      {/* <Animated.View
        style={[
          { width: 100, height: 80, backgroundColor: 'black', margin: 30 },
          style,
        ]}
      /> */}
      <Button
        onPress={() => {
          navigation.navigate('user-detail' as any);
          // randomWidth.value = Math.random() * 350;
        }}
      >
        toggle
      </Button>
      <Link
        to={{ screen: 'user-detail', params: { id: 'simo' } }}
        //   animate={({ hovered, pressed }) => {
        //     'worklet'

        //     return {
        //       scale: pressed ? 0.95 : hovered ? 1.1 : 1,
        //       rotateZ: pressed ? '0deg' : hovered ? '-3deg' : '0deg',
        //     }
        //   }}
        // transition={{
        //   type: 'timing',
        //   duration: 150,
        // }}
      >
        <Label
          selectable={false}
          fontSize={16}
          color="black"
          fontWeight={'bold'}
        >
          Moti Link
        </Label>
      </Link>
    </YStack>
  );
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
    <NavigationContainer
      linking={React.useMemo(
        () => ({
          prefixes: [Linking.createURL('/')],
          config: {
            initialRouteName: 'user-detail',
            screens: {
              home: '',
              'user-detail': 'user/:id',
            },
          },
        }),
        []
      )}
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
