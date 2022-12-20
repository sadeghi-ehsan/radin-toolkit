const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const portFinder = require("portfinder-sync");
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "development",
  entry: path.join(__dirname, "playground/index.tsx"),
  devtool: "eval-source-map",
  devServer: {
    compress: true,
    historyApiFallback: true,
    port: portFinder.getPort(3000),
    static: path.join(__dirname, "./lib"),
    client: {
      progress: true,
      reconnect: 5
    },
    liveReload: false,
    open: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"]
      },
      // {
      //   test: /\.(woff(2)?|ttf|eot)(\?v=\d+\.\d+\.\d+)?$/,
      //   use: "file-loader"
      // },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: [
          "file-loader",
          {
            loader: "image-webpack-loader",
            options: {
              disable: true
            }
          }
        ]
      },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   issuer: /\.[jt]sx?$/,
      //   use: ["babel-loader", "@svgr/webpack", "file-loader"]
      // },
      // {
      //   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      //   loader: "url-loader"
      // },
      // {
      //   test: /\.svg$/,
      //   use: ["@svgr/webpack"]
      // },
      {
        test: /\.(css|pcss|less)$/,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader",
          {
            loader: "less-loader",
            options: {
              lessOptions: {
                javascriptEnabled: true
              }
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".tsx", ".ts", ".js", ".jsx", ".json"],
    fallback: { stream: false }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "playground/index.html"),
      filename: "./index.html"
    }),
    new BundleAnalyzerPlugin()
  ]
  // optimization: {
  //   moduleIds: "deterministic",
  //   runtimeChunk: {
  //     name: entrypoint => `runtimechunk~${entrypoint.name}`
  //   },
  //   minimize: true,
  //   splitChunks: {
  //     cacheGroups: {
  //       vendor: {
  //         name: "node_vendors",
  //         test: /[/\\]node_modules[/\\]/,
  //         chunks: "all"
  //       }
  //     }
  //   }
  // }
};
