'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = require('./config');

const phaserModule = path.join(__dirname, '../node_modules/phaser-ce/');
const phaser = path.join(phaserModule, 'build/custom/phaser-split.js');
const pixi = path.join(phaserModule, 'build/custom/pixi.js');
const p2 = path.join(phaserModule, 'build/custom/p2.js');

module.exports = {
  entry: {
    app: [
      'babel-polyfill',
      path.resolve(__dirname, '../src/main.js')
    ],
    vendor: ['pixi', 'p2', 'phaser', 'webfontloader']
  },
  output: {
    path: path.resolve(__dirname, '../game'),
    filename: 'game-[chunkhash].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: config.title,
      template: path.join(__dirname, '../src', 'index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: '[name]-[chunkhash].js'
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.join(__dirname, '../src'),
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        include: path.join(__dirname, '../src'),
        use: ['style-loader', 'css-loader']
      },
      {
        test: /pixi\.js/,
        use: ['expose-loader?PIXI']
      },
      {
        test: /phaser-split\.js$/,
        use: ['expose-loader?Phaser']
      },
      {
        test: /p2\.js/,
        use: ['expose-loader?p2']
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|txt)(\?.*)?$/,
        include: path.join(__dirname, '../src'),
        use: {
          loader: 'file-loader',
          query: {
            name: 'media/[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
        include: path.join(__dirname, '../src'),
        use: {
          loader: 'url-loader',
          query: {
            limit: 10000,
            name: 'media/[name].[hash:8].[ext]'
          }
        }
      },
      {
        test: /\.json$/,
        include: path.join(__dirname, '../src'),
        use: 'json-loader'
      }
    ]
  },
  node: {
    dns: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  resolve: {
    alias: {
      'phaser': phaser,
      'pixi': pixi,
      'p2': p2
    }
  }
};
