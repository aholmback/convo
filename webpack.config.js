const path = require('path');
const webpack = require('webpack');

module.exports = {
  watch: true,
  entry: './src/index.js',
  devtool: 'source-map',
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [ 'style-loader', 'css-loader', 'sass-loader' ]
      }
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
    })
  ],
};
