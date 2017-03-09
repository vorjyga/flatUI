const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname + '/frontend',
  entry: './main.js',

  output: {
    path: __dirname + '/public',
    filename: 'main.js'
  },

 /* resolve: {
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
      /*{
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader' //!autoprefixer?browsers=last 2 versions'
      },*/
          {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract('css-loader!stylus-loader?resolve url')
      },      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }, {
        test: /\.(ico|png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file?name=[path][name].[ext]'
      }]
  },

  plugins: [
    new HtmlWebpackPlugin({filename: 'index.html', template: './main.pug'}),
    new ExtractTextPlugin({filename: '[name.css]'}) //'[name.css]','styles.css', {allChunks: true}
  ]
};