'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const core = require('./core.config');
const config = require('./config');

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

module.exports = merge.smart(core, {
  devtool: 'cheap-source-map',
  output: {
    pathinfo: true,
    publicPath: ''
  },
  watch: true,
  plugins: [
    definePlugin,
    new BrowserSyncPlugin({
      host: process.env.IP || config.host,
      port: process.env.PORT || config.port,
      server: {
        baseDir: ['./game/']
      }
    })
  ]
});
