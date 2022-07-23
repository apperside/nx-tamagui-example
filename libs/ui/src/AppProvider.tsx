/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/accessible-emoji */
import { config as Tamagui } from '@nx-tamagui-example/config';
import React from 'react';
export const AppProvider = ({
  theme,
  children,
}: {
  children: any;
  theme?: string;
}) => {
  return (
    <Tamagui.Provider
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={theme}
    >
      {children}
    </Tamagui.Provider>
  );
};
export default AppProvider;
