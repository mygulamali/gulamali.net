const path = require('path');

module.exports = {
  entry: {
    all: path.join(__dirname, '/assets/javascripts'),
  },
  output: {
    path: path.join(__dirname, '/tmp/webpack'),
    filename: 'assets/javascripts/[name].js',
  },
  resolve: {
    modules: [
      path.join(__dirname, '/assets/javascripts'),
      'node_modules',
    ],
    extensions: [
      '.js',
    ],
  },
};
