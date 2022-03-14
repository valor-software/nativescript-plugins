const webpack = require('@nativescript/webpack');
const { NormalModuleReplacementPlugin } = require('webpack');
const { resolve, join, dirname, relative } = require('path');

module.exports = (env) => {
  webpack.chainWebpack((config) => {
    const browserFields = ['uuid', 'socketcluster-client'];
    config.plugin('CustomNormalMotule').use(NormalModuleReplacementPlugin, [
      /.*/,
      function (resource) {
        /** @type string */
        const context = resource.context;
        let matches = context.matchAll(new RegExp(`(?<=\\/)node_modules\\/((${browserFields.join('|')})(?:\\/|$))`, 'g'));
        const matchesArray = [...matches];
        if (matchesArray.length === 0) {
          return;
        }
        const match = matchesArray[matchesArray.length - 1];
        const lastPackage = match[2];
        const splitModules = context.split(`node_modules/${lastPackage}`);
        const isCorrectPackage = splitModules.length === 1 || !splitModules[splitModules.length - 1].includes('node_modules');
        if (!isCorrectPackage) {
          return;
        }
        const nodeModulePath = splitModules.slice(0, -1).join(`node_modules/${lastPackage}`) + `node_modules/${lastPackage}`;
        const packageJsonPath = `${nodeModulePath}/package.json`;
        if (!packageJsonPath) {
          return;
        }
        const jsonData = require(packageJsonPath);
        if (jsonData.browser) {
          // console.log(resource);
          for (const k of Object.keys(jsonData.browser)) {
            const isRelativeReplacementRequest = k.startsWith('.');
            const isRelativeReplacement = jsonData.browser[k].startsWith('.');
            const absoluteRequest = isRelativeReplacementRequest ? resolve(context, resource.request) : resource.request;
            const absoluteReplacementRequest = isRelativeReplacementRequest ? resolve(context, k) : k;
            const absoluteReplacement = isRelativeReplacement ? resolve(nodeModulePath, jsonData.browser[k]) : jsonData.browser[k];
            if (absoluteRequest === absoluteReplacementRequest || absoluteRequest + '.js' === absoluteReplacementRequest) {
              const substitution = isRelativeReplacement ? `./` + relative(context, absoluteReplacement) : absoluteReplacement;
              resource.request = substitution;
              // console.log('new', resource);
              break;
            }
          }
        }
      },
    ]);
  });
};
