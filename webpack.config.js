var path = require("path");
var webpack = require("webpack");
var CleanWebpackPlugin = require('clean-webpack-plugin');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: ['./src/styles/main.scss'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js'
  },
  module: {
    rules: [
        {
            test: /\.s[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        },
        {
            test: /\.jpe?g|png|svg$/,
            loader: 'file-loader',
            options: {
              name: 'images/[name]_[hash].[ext]'
            }
        }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
        filename: '[name].css'
    }),
  ]
};
