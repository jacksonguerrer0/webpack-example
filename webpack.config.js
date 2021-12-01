const HtmlWebpackPlugin = require("html-webpack-plugin"),
  MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {
  // output: {
  //   publicPath: '/'
  // },
  module: {
    rules: [
      {
        test: /\.js$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "./assets/",
              useRelativePath: true,
            },
          },
        ],
      },
      // {
      //   test : /\.scss|.css$/,
      //   use : [ 'style-loader', 'css-loader', 'sass-loader' ]
      // }, {
      //   test : /\.(png|jp(e*)g|svg)$/,
      //   use : [{
      //     loader : 'url-loader',
      //     options : {
      //       limit : 800,
      //       name : 'assets/[hash]-[name].[ext]'
      //     }
      //   }]
      // }, 
      // {
      //   test: /\.(sa|sc|c)ss$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     "css-loader",
      //     "sass-loader",
      //   ],
      // },
      // {
      //   test: /\.(jpe?g|png|gif|svg|webp)$/i,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[ext]",
      //         outputPath: "assets/",
      //         useRelativePath: true,
      //       },
      //     },
      //   ],
      // },
      // {
      //   test: /\.(woff)$/i,
      //   use: ["file-loader?name=assets/[name].[ext]"],
      // },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    }),
    new MiniCssExtractPlugin({
      filename: "css/style.css"
    }),
  ]
}