import React from 'react';
import Document from 'next/document';
import { ServerStyleSheet, createGlobalStyle, css } from 'styled-components';
import { colors } from 'settings';
import normalize from 'normalize.css/normalize.css';

/** Setting up the one font for now. */
const fontFaces = css`
  @font-face {
    font-family: 'Fakt ProUI';
    src: url('/static/fonts/Fakt ProUI-Medium.ttf');
    font-style: normal;
    font-weight: normal;
  }
`;

const GlobalStyles = createGlobalStyle`
  ${fontFaces}
  html {
    background: ${colors['athens-gray']};
  }
  ${normalize}
`;

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(
          <>
            <GlobalStyles />
            <App {...props} />
          </>,
        ),
      });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
