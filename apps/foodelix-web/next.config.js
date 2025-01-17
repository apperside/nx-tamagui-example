// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');

const withPlugins = require('next-compose-plugins');
const { withTamagui } = require('@tamagui/next-plugin');
const withTM = require('next-transpile-modules');
const { withExpo } = require('@expo/next-adapter');

process.env.IGNORE_TS_CONFIG_PATHS = 'true';
process.env.TAMAGUI_TARGET = 'web';

const disableExtraction = process.env.NODE_ENV === 'development';
if (disableExtraction) {
  console.log('Disabling static extraction in development mode for better HMR');
}

const tamaguiConfig = {
  config: './apps/foodelix-web/tamagui.config.ts',
  components: [
    'tamagui',
    '@nx-tamagui-example/ui'
  ],

  logTimings: true,
  disableExtraction,
  shouldExtract: (path) => {
    if (path.includes('libs/ui') ) {
      return true;
    }
  },
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
};

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  experimental: {
    plugins: true,
    scrollRestoration: true,
    legacyBrowsers: false,
    browsersListForSwc: true,
  },
};

const transform = withPlugins([
  [withExpo, { projectRoot: __dirname }],
  withNx(nextConfig),
  withTamagui(tamaguiConfig),
  withTM([
    'solito',
    'react-native-web',
    'expo-linking',
    'expo-constants',
    '@nx-tamagui-example/ui',
  ]),
]);

module.exports = function (name, { defaultConfig }) {
  defaultConfig.webpack5 = true;
  // defaultConfig.experimental.reactRoot = 'concurrent'
  defaultConfig.typescript.ignoreBuildErrors = true;
  return transform(name, {
    ...defaultConfig,
    webpack5: true,
    experimental: {
      plugins: true,
      scrollRestoration: true,
      legacyBrowsers: false,
      browsersListForSwc: true,
    },
  });
};
