const {resolve} = require('path');
const AutoExport = require('webpack-auto-export');
const {withSentryConfig} = require('@sentry/nextjs');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [resolve(__dirname, 'src/styles')],
    prependData: `@import "resources.scss";`,
  },
  i18n: {
    locales: ['default', 'en', 'ru', 'hy'],
    defaultLocale: 'default',
    localeDetection: false,
  },
  webpack: (config) => {
    const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test('.svg'),
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      loader: require.resolve('@svgr/webpack'),
    });

    config.plugins.push(
      new AutoExport({
        extension: '.ts',
        baseDir: './src',
        exportType: 'detect',
        paths: [
          'assets/icons',
          'components',
          'constants',
          'containers',
          'hooks',
          'services',
          'store',
          'types',
          'utils',
        ],
      }),
    );

    return config;
  },
};

const sentryWebpackPluginOptions = {
  silent: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
