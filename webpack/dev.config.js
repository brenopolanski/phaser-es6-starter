const webpack = require('webpack');
const merge = require('webpack-merge');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const core = require('./core.config');

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'true'))
});

module.exports = merge.smart(core, {
  devtool: 'cheap-source-map',
  output: {
    pathinfo: true
  },
  watch: true,
  plugins: [
    definePlugin,
    new BrowserSyncPlugin({
      host: process.env.IP || 'localhost',
      port: process.env.PORT || 3000,
      server: {
        baseDir: ['./', '../game']
      }
    })
  ]
});
