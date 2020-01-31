import App from 'next/app';
import React from 'react';
import { ThemeContainer, Header } from 'components';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeContainer>
        <Header />
        <Component {...pageProps} />
      </ThemeContainer>
    );
  }
}
