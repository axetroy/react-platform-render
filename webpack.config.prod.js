const path = require('path');

module.exports = {
  entry: path.join(__dirname, 'src', 'react-platform-render.jsx'),
  output: {
    path: path.join(__dirname, 'lib'),
    filename: 'react-platform-render.js',
    libraryTarget: 'umd'
  },
  externals: {
    react: 'react',
    platform: 'platform'
  },
  module: {
    loaders: [
      {
        test: /\.(jsx|js)?$/,
        loader: 'babel-loader',
        exclude: /(node_modules|bower_components)/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, 'example')
  }
};
