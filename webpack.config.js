const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: './src/vendor/index.js',
    mb: ['./src/mb/index.jsx', './src/mb/res/index.less', './src/mb/index.html']
  },
  output: {
    filename: 'assets/js/[name].js',
    chunkFilename: 'assets/js/chunk.[id].js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'normalize.css': path.resolve(__dirname, './node_modules/normalize.css/normalize.css')
    }
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['babel-loader']
      },
      {
        test: /\.less$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jpg$/,
        use: ['url-loader?limit=10240']
      },
      {
        test: /\.png$/,
        use: ['url-loader?limit=10240']
      },
      {
        test: /\.html$/,
        use: [
          'file-loader?name=[name].html',
          'extract-loader',
          'html-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: 'vendor'
    }),
    new ExtractTextPlugin('assets/css/[name].css')
  ]
};
