/*global google */
require.config({
  paths: {
    jquery: '../components/jquery/jquery',
    bootstrap: 'vendor/bootstrap',
    maps: 'vendor/maps'
  },
  shim: {
      bootstrap: {
          deps: ['jquery'],
          exports: 'jquery'
      }
  }
});

require([
  'app', 'jquery','maps', 'bootstrap'
  ], function (app, $) {
  'use strict';
  // use app here
  console.log(app);
  console.log(google);
  console.log('Running jQuery %s', $().jquery);
});