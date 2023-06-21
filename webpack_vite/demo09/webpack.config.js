var webpack = require('webpack');
const path = require('path');

var devFlagPlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
  entry: './main.js',
  output: {
    filename: 'bundle.js'
  },
  plugins: [devFlagPlugin],
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
    },
  }
};
