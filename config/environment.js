/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'kavod-crm',
    podModulePrefix: 'kavod-crm/pods',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      applicationId: process.env.PARSE_APP_KEY,
      restApiId: process.env.PARSE_REST_KEY
    },

    contentSecurityPolicy: {
      'default-src': '\'none\'',
      'script-src': '\'self\' \'unsafe-inline\' \'unsafe-eval\' cdn.mxpnl.com *.googleapis.com *.mxpnl.com *.gstatic.com', // Allow scripts from https://cdn.mxpnl.com
      'font-src': '\'self\' fonts.gstatic.com *', // Allow fonts to be loaded from http://fonts.gstatic.com
      'connect-src': '\'self\' https://api.mixpanel.com ' +
        'https://auth.firebase.com wss://*.firebaseio.com' +
        'http://custom-api.local https://*.firebaseio.com *.firebase.com *', // Allow data (ajax/websocket) from api.mixpanel.com and custom-api.local
      'img-src': '\'self\' \'unsafe-inline\' \'unsafe-eval\' *.mqcdn.com *.googleapis.com *.thunderforest.com *',
      'style-src': '\'self\' \'unsafe-inline\' fonts.googleapis.com', // Allow inline styles and loaded CSS from http://fonts.googleapis.com
      'media-src': '\'self\''
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
  }

  return ENV;
};
