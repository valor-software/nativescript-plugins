const webpack = require('@nativescript/webpack');
const PackageSpecificAliasFieldPlugin = require('./package-alias-plugin');

module.exports = (env) => {
  webpack.chainWebpack((config) => {
    const packages = ['uuid', 'socketcluster-client'];
    config.resolve.plugin('PackageSpecificAliasFieldPlugin|ngrx-browser-fields').use(PackageSpecificAliasFieldPlugin, ['browser', packages]);
  });
};
