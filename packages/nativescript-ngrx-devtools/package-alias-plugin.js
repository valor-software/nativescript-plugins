/*
    MIT License http://www.opensource.org/licenses/mit-license.php
    Author Tobias Koppers @sokra
*/

'use strict';

const DescriptionFileUtils = require('enhanced-resolve/lib/DescriptionFileUtils');
const getInnerRequest = require('enhanced-resolve/lib/getInnerRequest');

/** @typedef {import("./Resolver")} Resolver */
/** @typedef {import("./Resolver").ResolveRequest} ResolveRequest */
/** @typedef {import("./Resolver").ResolveStepHook} ResolveStepHook */

module.exports = class PackageSpecificAliasFieldPlugin {
  /**
   * @param {string | ResolveStepHook} source source
   * @param {string | Array<string>} field field
   * @param {string | ResolveStepHook} target target
   */
  constructor(field, names) {
    this.sources = ['described-resolve', 'file'];
    this.field = field;
    this.target = 'internal-resolve';
    this.names = new Set(names);
  }

  /**
   * @param {Resolver} resolver the resolver
   * @returns {void}
   */
  apply(resolver) {
    this.sources.forEach((source) => {
      const target = resolver.ensureHook(this.target);
      resolver.getHook(source).tapAsync('AliasFieldPlugin', (request, resolveContext, callback) => {
        if (!request.descriptionFileData) return callback();
        const innerRequest = getInnerRequest(resolver, request);
        if (!innerRequest) return callback();
        const name = DescriptionFileUtils.getField(request.descriptionFileData, 'name');
        if (!this.names.has(name)) {
          return callback();
        }
        const fieldData = DescriptionFileUtils.getField(request.descriptionFileData, this.field);
        if (fieldData === null || typeof fieldData !== 'object') {
          if (resolveContext.log) resolveContext.log("Field '" + this.field + "' doesn't contain a valid alias configuration");
          return callback();
        }
        const data1 = fieldData[innerRequest];
        const data2 = fieldData[innerRequest.replace(/^\.\//, '')];
        const data = typeof data1 !== 'undefined' ? data1 : data2;
        if (data === innerRequest) return callback();
        if (data === undefined) return callback();
        if (data === false) {
          /** @type {ResolveRequest} */
          const ignoreObj = {
            ...request,
            path: false,
          };
          return callback(null, ignoreObj);
        }
        const obj = {
          ...request,
          path: request.descriptionFileRoot,
          request: data,
          fullySpecified: false,
        };
        resolver.doResolve(target, obj, 'aliased from description file ' + request.descriptionFilePath + " with mapping '" + innerRequest + "' to '" + data + "'", resolveContext, (err, result) => {
          if (err) return callback(err);

          // Don't allow other aliasing or raw request
          if (result === undefined) return callback(null, null);
          callback(null, result);
        });
      });
    });
  }
};
