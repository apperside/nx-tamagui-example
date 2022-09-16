// import "./cssfonts.css"
import NextDocument, { Html, Main, NextScript } from 'next/document';
import { Children } from 'react';
import { AppRegistry } from 'react-native-web';

import { AppTheme } from '@nx-tamagui-example/ui';
import InlineStylesHead from '../InlineStylesHead';

import fonts from './cssfonts';
// const fonts=`
// @font-face {
//   font-family: 'Barlow-ThinItalic';
//   src: url('/fonts/Barlow-ThinItalic.woff2') format('woff2'),
//       url('/fonts/Barlow-ThinItalic.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;
//   font-display: swap;
// }

// @font-face {
//   font-family: 'Barlow-SemiBold';
//   src: url('/fonts/Barlow-SemiBold.woff2') format('woff2'),
//       url('/fonts/Barlow-SemiBold.woff') format('woff');
//   font-weight: normal;
//   font-style: normal;
//   font-display: swap;
// }

// `

export default class Document extends NextDocument {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('Main', () => Main);
    const page = await renderPage();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { getStyleElement } = AppRegistry.getApplication('Main');
    const styles = [
      getStyleElement(),
      // eslint-disable-next-line react/jsx-key
      <style dangerouslySetInnerHTML={{ __html: AppTheme.getCSS() }} />,
      // eslint-disable-next-line react/jsx-key
      <style id="fontscss" dangerouslySetInnerHTML={{ __html: fonts }} />,
    ];
    return { ...page, styles: Children.toArray(styles) };
  }

  render() {
    return (
      <Html>
        <InlineStylesHead>
          <meta
            name="description"
            content="Tamagui example with Nx Workspaces"
          />
        </InlineStylesHead>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
