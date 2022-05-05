import {Head, Html, Main, NextScript} from 'next/document';
import React from 'react';

const TrueFilterDocument: React.FC = () => (
  <Html lang="en">
    <Head>
      <meta name="author" content="true_filter" />
      <meta name="theme-color" content="#bf9425" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="application-name" content="true_filter" />
      <meta name="format-detection" content="telephone=no" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-title" content="true_filter" />
      <meta name="msapplication-navbutton-color" content="#bf9425" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />

      <link rel="manifest" href="/manifest.json" />
      <link rel="apple-touch-icon" sizes="320x320" href="/favicon.ico" />
    </Head>
    <body>
      <Main />
      <NextScript />
    </body>
  </Html>
);

export default TrueFilterDocument;
