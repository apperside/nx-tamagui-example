/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/accessible-emoji */
import { config } from '@nx-tamagui-example/config';
import { TamaguiProvider } from 'tamagui';

import React from 'react';
export const AppProvider = ({
  theme,
  children,
}: {
  children: any;
  theme?: string;
}) => {
  return (
    <TamaguiProvider
      config={config}
      // disableInjectCSS
      // disableRootThemeClass
      // defaultTheme={"light"}
    >
      {children}
    </TamaguiProvider>
  );
};
export default AppProvider;
