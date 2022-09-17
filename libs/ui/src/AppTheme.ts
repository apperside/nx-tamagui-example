//! debug
/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { createInterFont } from '@tamagui/font-inter';
import { shorthands } from '@tamagui/shorthands';
import { themes, tokens } from '@tamagui/theme-base';
import { createTamagui, createFont } from '@tamagui/core';

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
    6: '$primaryColor',
    7: '$secondaryColor',
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

const bodyFont = createInterFont(
  {},
  {
    sizeSize: (size) => Math.round(size * 1.1),
    sizeLineHeight: (size) => Math.round(size * 1.1 + (size > 20 ? 10 : 10)),
  }
);

// const config = createTamagui({
//   themes,
//   tokens:{
//     ...tokens,
//     size: {
//       sm: 10,
//       md: 15,
//       lg: 25,
//       // ...
//     },
//     color: {
//       ...tokens.color,
//       primaryColor: '#EA7C69',
//       secondaryColor: '#9288E0',
//       myColor: '#E97274',
//     },
//   },
//   shorthands,
//   fonts: {},
// });

const config = createTamagui({
  //   animations,
  defaultTheme: 'light',
  shouldAddPrefersColorThemes: true,
  disableRootThemeClass: true,
  themeClassNameOnRoot: true,
  shorthands,
  fonts: {
    heading: headingFont,
    body: bodyFont,
  },
  themes,
  tokens: {
    ...tokens,
    size: {
      sm: 10,
      md: 15,
      lg: 25,
      // ...
    },
    color: {
      primaryColor: '#EA7C69',
      secondaryColor: '#9288E0',
      ...tokens.color,
      myColor: '#E97274',
    },
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
// console.log('app theme is', themes);
export { config };
const AppTheme = config;
export { AppTheme };
export default config;
