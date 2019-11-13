const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const path = require('path');

module.exports = {
  entry: {
    all: path.join(__dirname, '/assets/javascripts'),
  },
  output: {
    path: path.join(__dirname, '/tmp/webpack'),
    filename: 'assets/javascripts/[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
    ],
  },
  resolve: {
    modules: [
      path.join(__dirname, '/assets/javascripts'),
      'node_modules',
    ],
    extensions: [
      '.js',
      '.css',
      '.scss',
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '/assets/stylesheets/all.css',
    }),
  ],
};
