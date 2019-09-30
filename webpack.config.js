var HTMLWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: __dirname + '/src/index.html',
    filename: 'index.html',
    inject: 'body'
});
const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.js',
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
        {
            test: /\.css$/,
            use:['style-loader','css-loader']

        },
        {
            test: /\.(html)$/,
            use: [{
            loader: 'html-loader',
            options: {
                attrs: [':data-src']
            }

        }],
    }]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'main.js',
    
  },
  plugins: [HTMLWebpackPluginConfig]
};