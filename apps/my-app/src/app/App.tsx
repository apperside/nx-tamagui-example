/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
/* eslint-disable jsx-a11y/accessible-emoji */
import { AppProvider } from '@nx-tamagui-example/ui';
import { NativeNavigation } from './navigation';

export const EntryPoint = () => {
  return (
    <AppProvider theme="light">
      <NativeNavigation />
    </AppProvider>
  );
};
export default EntryPoint;
