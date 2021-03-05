
# 安装

 ```
npm install --save-dev @babel/core@7.1.0 @babel/cli@7.1.0 @babel/preset-env@7.1.0 @babel/preset-react@7.0.0
npm install --save-dev webpack@4.19.1 webpack-cli@3.1.1 webpack-dev-server@3.1.8 style-loader@0.23.0 css-loader@1.0.0 babel-loader@8.0.2
npm install --save-dev html-webpack-plugin@4 clean-webpack-plugin copy-webpack-plugin
npm install --save-dev less-loader@5 less@4

npm install --save install  react@16.5.2 react-dom@16.5.2 axios


```

# 配置
## .babelrc
```
{
    "presets": ["@babel/env", "@babel/preset-react"]
}
```

## webpack
```
const path = require("path");
const webpack = require("webpack");
module.exports = {
  entry: "./src/index.js",
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
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    path: path.resolve(__dirname, "dist/"),
    publicPath: "/dist/",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "public/"),
    port: 3000,
    publicPath: "http://localhost:3000/dist/",
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};
```

# 参考文档
## react-router@5.x：https://github.com/ReactTraining/react-router --> https://github.com/ReactTraining/react-router/tree/master/packages/react-router/docs/api
## webpack-dev-server@3.x：https://webpack.js.org/configuration/dev-server/#devserver 或 https://www.webpackjs.com/configuration/dev-server/#devserver
