// const poststylus = require('poststylus');
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

    rules: [

      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: [
          /node_modules/,
          /frontend\/plugins\/.*\.js$/
        ]
      }, {
        test: /\.css$/,
        use: 'style-loader!css-loader'
      },
      {
        test: /\.styl$/,
        use: ExtractTextPlugin.extract({
          fallback:'style-loader',
          use:'css-loader!stylus-loader?resolve url',
        })
      }, {
        test: /\.pug$/,
        use: 'pug-loader'
      },
      {
        test: /\.(ico|png|jpg|svg|ttf|eot|woff|woff2)$/,
        use: 'file-loader?name=[path][name].[ext]?[hash]'
      }]
  },

  plugins: [
    // new webpack.LoaderOptionsPlugin({
    //   options: {
    //     stylus: {
    //       use: [poststylus(['autoprefixer'])]
    //     }
    //   }
    // }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
    }),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({filename: 'index.html', template: './main.pug'}),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true,
      disable: false})
  ],

  devServer: {
   contentBase: './public'
  }
};