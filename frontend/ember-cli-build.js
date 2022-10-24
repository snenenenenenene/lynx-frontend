'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  let app = new EmberApp(defaults, {
    sassOptions: {
      includePaths: [
        'node_modules/@appuniversum/appuniversum',
        'node_modules/@appuniversum/ember-appuniversum/app/styles',
      ],
    },
    autoprefixer: {
      enabled: true,
      cascade: true,
      sourcemap: true,
    },
    fingerprint: {
      exclude: ['public/assets'],
    },
  });
  return app.toTree();
};
