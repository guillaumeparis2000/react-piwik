var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
var path = require('path');
var env = require('yargs').argv.mode;

var libraryName = 'React-Piwik';

var plugins = [], outputFile;
plugins.push(new UglifyJsPlugin({ minimize: true }));
outputFile = libraryName + '.js';

var config = {
  entry: __dirname + '/src/React-Piwik.js',
  devtool: 'source-map',
  output: {
    path: __dirname + '/lib',
    filename: outputFile,
    library: libraryName,
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      {
        test: /(\.jsx|\.js)$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: [
            'es2015',
            __dirname + '/node_modules/babel-preset-react',
            __dirname + '/node_modules/babel-preset-stage-0',
          ],
          plugins: ['babel-plugin-add-module-exports']
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: plugins
};

module.exports = config;
