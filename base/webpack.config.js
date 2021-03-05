const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin =require("copy-webpack-plugin");
const svrPort=4000;
module.exports = {
  entry: "./src/pages/index.js",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: { presets: ["@babel/env"] }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
          test: /\.less$/,
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader" // translates CSS into CommonJS
          }, {
              loader: "less-loader" // compiles Less to CSS
          }]
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "[name].[chunkhash].js"
  },
  devServer: {
    contentBase: path.join(__dirname, "/public/mock/"),
    port: svrPort,
    publicPath: "http://localhost:"+svrPort+"/",
    //outputPath: path.join(__dirname, 'build')//本版本不能配置此属性
    historyApiFallback:true
  },
  plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template:"public/index.html",
        publicPath: "http://localhost:"+svrPort+"/",
      }),
      new CopyWebpackPlugin({
        patterns:[
          { 
            from:"public/mock",
            //to:"dist/"//增加这个配置反而会在dist下再创建一个dist
          }
        ]
      })
      
    ]
};