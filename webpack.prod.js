var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    './app/index'
  ],
  output: {
    path: __dirname + '/scripts/',
    filename: 'bundle.js',
    publicPath: '/scripts/'
  },
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx?harmony'], exclude: /node_modules/ },
      { test: /\.css$/, loaders: ['style-loader', 'css-loader'] }
    ]
  }
};
