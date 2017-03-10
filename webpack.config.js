const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/frontend',
  entry: {
    main: './main'
  },

  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },

    /*resolve: {
      modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.styl', '.pug']
    },*/


  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/,
          /frontend\/plugins\/.*\.js$/
        ]
      },
          {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader!stylus-loader?resolve url'})
      },      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.(ico|png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]?[hash]'
      }]
  },

  plugins: [
    new HtmlWebpackPlugin({filename: 'index.html', template: './main.pug'}),
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true, disable: process.env.NODE_ENV=='development'}) //'[name.css]','styles.css', {allChunks: true}
  ],

  devServer: {
    contentBase: './public',
    hot:true
  }
};