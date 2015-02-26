var webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './app'
    ]
  },
  devtool: 'eval',
  output: {
    path: './build',
    filename: 'app.js',
    publicPath: '/build/'
  },
  // plugins: [
  //   new webpack.NoErrorsPlugin()
  // ],
  resolve: {
    extensions: ['', '.js']
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['jsx?harmony']}
    ]
  },
  //Stubbed as empty so that Joi works
  node: {
     net : 'empty',
     tls : 'empty',
     dns : 'empty'
  }
};
