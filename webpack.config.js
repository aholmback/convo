const path = require('path');
const webpack = require('webpack');

module.exports = {
  watch: true,
  entry: './src/index.js',
  output: {
    filename: 'dist/bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
    })
  ],
};
