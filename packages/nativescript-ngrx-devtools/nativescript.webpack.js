const webpack = require('@nativescript/webpack');
const PackageSpecificAliasFieldPlugin = require('./package-alias-plugin');

module.exports = (env) => {
  webpack.chainWebpack((config) => {
    const browserFields = ['uuid', 'socketcluster-client'];
    config.resolve.plugin('ngrx-browser-fields').use(PackageSpecificAliasFieldPlugin, ['browser', browserFields]);
  });
};
