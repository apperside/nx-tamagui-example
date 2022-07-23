import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { AppProvider } from '@nx-tamagui-example/ui';
import { useMemo } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();
  // memo to avoid re-render on dark/light change

  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [Component, pageProps]);
  // because we do our custom getCSS() above, we disableInjectCSS here

  return (
    <>
      <Head>
        <title>Tamagui in Nx Workspaces</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextThemeProvider onChangeTheme={setTheme}>
        <AppProvider theme={theme}>
          {contents}
        </AppProvider>
      </NextThemeProvider>
    </>
  );
}
