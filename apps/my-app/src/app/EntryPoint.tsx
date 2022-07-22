/* eslint-disable jsx-a11y/accessible-emoji */
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import App from './App';
import { NativeNavigation } from './navigation';

export const EntryPoint = () => {
  return (
    <NavigationContainer >
      <App/>
    </NavigationContainer>
  );
};
export default EntryPoint;
