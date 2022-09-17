/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/accessible-emoji */
import { config } from './AppTheme';
import { TamaguiProvider } from 'tamagui';

import React from 'react';
export const AppProvider = ({
  theme = 'dark',
  children,
}: {
  children: any;
  theme?: string;
}) => {
  return (
    <TamaguiProvider
      config={config}
      disableInjectCSS
      disableRootThemeClass
      defaultTheme={theme}
    >
      {children}
    </TamaguiProvider>
  );
};
export default AppProvider;
