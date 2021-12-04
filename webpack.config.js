const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin"),
  path = require("path");

module.exports = {
  entry:{
    js: './src/index.js',
    react: './src/react.js',
    ts: './src/ts.js',
  },
  output: {
    filename:'[name].[chunkhash].js',
    // output path is required for `clean-webpack-plugin`
    // path: path.resolve(__dirname, "dist"),
    // this places all images processed in an image folder
    assetModuleFilename: "assets/[name][ext][query]",
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.html$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "html-loader",
            options: {
              minimize: true
            } 
          }
        ]
      },
      {
        test: /\.(scss|css|sass)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          }, 
          "css-loader",
          "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        // use: [ "file-loader?name=assets/[name].[ext]" ]
        type: "asset",
        use: ["image-webpack-loader"]
      },
    ]
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: "./src/index.html",
    //   filename: "index.html"
    // }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      chunks: ["js"],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "react.html",
      chunks: ["react"],
      hash: true
    }),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "ts.html",
      chunks: ["ts"],
      hash: true
    }),
    new MiniCssExtractPlugin(),
  ]
}