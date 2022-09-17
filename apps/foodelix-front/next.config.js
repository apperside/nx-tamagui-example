//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require('@nrwl/next/plugins/with-nx');
const { withExpo } = require('@expo/next-adapter');
const withTM = require('next-transpile-modules');
// note next-compose-plugins somewhat unmaintained
// you can use a simple two-liner instead, see:
// https://github.com/cyrilwanner/next-compose-plugins/issues/59#issuecomment-1192523231
const withPlugins = require('next-compose-plugins');
const { withTamagui } = require('@tamagui/next-plugin');

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
};

const transform = withPlugins([
  [withExpo, { projectRoot: __dirname }],
  withNx(nextConfig),
  withTM([
    'solito',
    'react-native-web',
    'expo-linking',
    'expo-constants',
    '@nx-tamagui-example/ui',
  ]),
  // All options shows are optional, except config:
  withTamagui({
    useReactNativeWebLite: false,
    // Path to your tamagui.config.ts file:
    config: './libs/ui/src/AppTheme.ts',

    // Your design system (default: "tamagui")
    components: ['@nx-tamagui-example/ui', 'tamagui'],

    // Follow normalized imports matching these file names, attempt to evaluate
    // their exports for static extraction
    importsWhitelist: ['constants.js', 'colors.js'],

    // display detailed output (default true)
    logTimings: true,

    // disable static extraction, faster to iterate in dev mode (default false)
    disableExtraction: process.env.NODE_ENV === 'development',

    // disableExtraction only disables optimizations but keeps the debug ability and output
    // if you want faster builds, you can disable tamagui entirely with this (default false)
    disable: false,

    // Exclude react-native-web modules to lighten bundle
    excludeReactNativeWebExports: [
      'Switch',
      'ProgressBar',
      'Picker',
      'Modal',
      'PressResponder',
      'VirtualizedList',
      'VirtualizedSectionList',
      'AnimatedFlatList',
      'FlatList',
      'CheckBox',
      'Touchable',
      'SectionList',
    ],

    // The following options are for more unusual configurations

    // By default, we configure webpack to pass anything inside your root or design system
    // to the Tamagui loader. If you are importing files from an external package, use this:
    shouldExtract: (path, projectRoot) => {
      if (path.includes('@nx-tamagui-example/ui') || path.includes('libs/ui')) {
        return true;
      }
    },

    // Many packages give difficulty to the nextjs server-side (node) runtime when un-bundled.
    // for example, tamagui configures aliases like `react-native` => `react-native-web`.
    // if you're running into a module that has errors importing react-native, you'll want to
    // use a custom shouldExcludeFromServer function to include it (or override the default).
    // this is the exact same return type as webpack.externals.
    // returning undefined will let tamagui handle it, boolean or other values to override.
    // shouldExcludeFromServer: ({ fullPath, request }) => {
    //   if (fullPath.includes('my-module')) {
    //     return `commonjs ${commonjs}`;
    //   }
    //   if (request === 'some-hard-to-bundle-package') {
    //     return true;
    //   }
    // },
  }),
]);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
// const nextConfig = config;
// // const nextConfig = {
// //   nx: {
// //     // Set this to true if you would like to to use SVGR
// //     // See: https://github.com/gregberge/svgr
// //     svgr: false,
// //   },
// // };

// module.exports = withNx(nextConfig);
module.exports = function (name, { defaultConfig }) {
  // defaultConfig.webpack5 = true;
  // defaultConfig.experimental.reactRoot = 'concurrent'
  // defaultConfig.typescript.ignoreBuildErrors = true;
  return transform(name, {
    ...defaultConfig,
    // webpack5: true,
    experimental: {
      plugins: true,
      // scrollRestoration: true,
      // legacyBrowsers: false,
      // browsersListForSwc: true,
    },
  });
};
