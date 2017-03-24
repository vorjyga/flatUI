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

    resolve: {
      alias: {
        "jquery-ui": "jquery-ui/jquery-ui.js"
      }
      /*modulesDirectories: ['node_modules'],
      extensions: ['', '.js', '.styl', '.pug']*/
    },


  module: {

    loaders: [
      /*{
        enforce: 'pre',
        test: /\.styl$/,
        loader: 'import-glob-loader'
      },*/
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /node_modules/,
          /frontend\/plugins\/.*\.js$/
        ]
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract({fallback:'style-loader', use:'css-loader!stylus-loader?resolve url'})
      }, {
        test: /\.pug$/,
        loader: 'pug-loader'
      },/* {
        test: /\.styl$/,
        loader:'style-loader!css-loader!stylus-loader?resolve url'
      },*/
      {
        test: /\.(ico|png|jpg|svg|ttf|eot|woff|woff2)$/,
        loader: 'file-loader?name=[path][name].[ext]?[hash]'
      }]
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({filename: 'index.html', template: './main.pug'}),
    new ExtractTextPlugin({filename: 'styles.css', allChunks: true, disable: process.env.NODE_ENV=='development'}) //'[name.css]','styles.css', {allChunks: true} ,
  ],

  devServer: {
   contentBase: './public'
  }
};