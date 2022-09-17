import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme';
import React, { useMemo, useState } from 'react';
import { AppProvider } from '@nx-tamagui-example/ui';

function CustomApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useRootTheme();

  // memo to avoid re-render on dark/light change
  const contents = useMemo(() => {
    return <Component {...pageProps} />;
  }, [pageProps]);

  return (
    <>
      <Head>
        <title>Welcome to foodelix-front!</title>
      </Head>
      <main className="app">
        <NextThemeProvider onChangeTheme={setTheme}>
          {contents}
        </NextThemeProvider>
      </main>
    </>
  );
}

export default CustomApp;
