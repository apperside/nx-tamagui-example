/* eslint-disable jsx-a11y/accessible-emoji */
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import React, { useMemo } from 'react';
import App from './App';
/* eslint-disable jsx-a11y/accessible-emoji */
import { config as Tamagui } from '@nx-tamagui-example/config';
import { AppProvider } from '@nx-tamagui-example/ui';
import { NativeNavigation } from './navigation';

export const EntryPoint = () => {
  return (
    <AppProvider>
      <NativeNavigation />
    </AppProvider>
  );
};
export default EntryPoint;
