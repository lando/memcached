'use strict';

// Modules
const _ = require('lodash');
const path = require('path');

// Builder
module.exports = {
  name: 'memcached',
  config: {
    version: '1',
    supported: ['1', '1.6', '1.6.x', '1.5', '1.5.x', '1.5.12'],
    pinPairs: {
      '1': 'bitnamilegacy/memcached:1.6.39-debian-12-r1',
      '1.6': 'bitnamilegacy/memcached:1.6.39-debian-12-r1',
      '1.5': 'bitnamilegacy/memcached:1.5.22',
    },
    patchesSupported: true,
    confSrc: path.resolve(__dirname, '..', 'config'),
    mem: 64,
    port: '11211',
  },
  parent: '_service',
  builder: (parent, config) => class LandoMemcached extends parent {
    constructor(id, options = {}) {
      options = _.merge({}, config, options);
      const memcached = {
        image: `bitnamilegacy/memcached:${options.version}`,
        command: '/launch.sh',
        environment: {
          MEMCACHED_CACHE_SIZE: options.mem,
        },
        volumes: [
          `${options.confDest}/launch.sh:/launch.sh`,
        ],
      };
      // Send it downstream
      super(id, options, {services: _.set({}, options.name, memcached)});
    };
  },
};
