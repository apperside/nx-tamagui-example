/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/accessible-emoji */
import { config as Tamagui } from '@nx-tamagui-example/config';
import React from 'react';
export const AppProvider = ({ children }: any) => {
  return (
    <Tamagui.Provider
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={'light'}
    >
      {children}
    </Tamagui.Provider>
  );
};
export default AppProvider;
