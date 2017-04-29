const webpack = require('webpack');
const merge = require('webpack-merge');
const core = require('./core.config');

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || 'false'))
});

module.exports = merge.smart(core, {
  plugins: [
    definePlugin,
    new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
    new webpack.optimize.UglifyJsPlugin({
      compress: true,
      drop_console: true,
      minimize: true,
      output: {
        comments: false
      }
    })
  ]
});
