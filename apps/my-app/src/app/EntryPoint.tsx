/* eslint-disable jsx-a11y/accessible-emoji */
import { NavigationContainer } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import React, { useMemo } from 'react';
import App from './App';
/* eslint-disable jsx-a11y/accessible-emoji */
import { config as Tamagui } from '@nx-tamagui-example/config';
import { NativeNavigation } from './navigation';

export const EntryPoint = () => {
  return (
    <Tamagui.Provider
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={'light'}
    >
     
        <NativeNavigation/>
    </Tamagui.Provider>
  );
};
export default EntryPoint;
