//! debug
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens as tamaguiTokens } from '@tamagui/theme-base';
import { useMemo } from 'react';

import {
  createTamagui,
  createTokens,
  getTokens as getTamaguiTokens,
} from 'tamagui';

const headingFont = createInterFont({
  transform: {
    6: 'uppercase',
    7: 'none',
  },
  weight: {
    1: '1000',
    6: '400',
    7: '700',
  },
  family: 'Barlow-SemiBold',
  color: {
    // 6: '$primaryColor',
    // 7: '$secondaryColor',
  },
  letterSpacing: {
    5: 2,
    6: 1,
    7: 0,
    8: -1,
    9: -2,
    10: -3,
    12: -4,
    14: -5,
    15: -6,
  },
});

const buttonNormal = createInterFont({
  family: 'Barlow-SemiBold',
});

const bodyFont = createInterFont(
  {},
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
);

export const appTokens = createTokens({
  ...tamaguiTokens,

  // font: {
  //   heading: headingFont,
  //   body: bodyFont,
  //   buttonNormal,
  // },

  color: {
    ...tamaguiTokens.color,
    primaryColor: '#EA7C69',
    secondaryColor: '#9288E0',
    myColor: '#E97274',
  },
  size: {
    ...tamaguiTokens.size,
    sm: 10,
    md: 15,
    lg: 25,
  },
});

export const getTokens = () => getTamaguiTokens() as typeof appTokens;
const config = createTamagui({
  themes,
  tokens: appTokens,
  //   animations,
  // defaultTheme: 'dark',
  // shouldAddPrefersColorThemes: true,
  // disableRootThemeClass: true,
  // themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
    buttonNormal,
  },
  media: {
    xs: { maxWidth: 660 },
    sm: { maxWidth: 800 },
    md: { maxWidth: 1020 },
    lg: { maxWidth: 1280 },
    xl: { maxWidth: 1420 },
    xxl: { maxWidth: 1600 },
    gtXs: { minWidth: 660 + 1 },
    gtSm: { minWidth: 800 + 1 },
    gtMd: { minWidth: 1020 + 1 },
    gtLg: { minWidth: 1280 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  
});

/**
 *
 * @returns Workaround function untill this get fixed https://github.com/tamagui/tamagui/issues/212
 */
export const useTheme = () => {
  const tokens = getTokens();

  const result = useMemo(() => {
    return Object.keys(tokens).reduce((prev, currentOuter, index) => {
      console.log('prev and current', prev, currentOuter);
      prev[currentOuter] = Object.keys(tokens[currentOuter]).reduce(
        (prev, current: string) => {
          prev[current.slice(1)] = tokens[currentOuter][current]?.val;
          return prev;
        },
        {}
      );
      return prev;
    }, {});
  }, [tokens]);
  // console.log('result is');
  return result as typeof config.tokens;
};

export { config };
const AppTheme = config;
export { AppTheme };
export default config;
