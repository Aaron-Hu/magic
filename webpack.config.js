var path = require("path")
var webpack = require("webpack")

module.exports = {
  devtool: 'eval-source-map',

  entry: [
    "webpack-hot-middleware/client",
    "./client/index.js"
  ],
  output: {
    path: path.join(__dirname, ".build"),
    filename: "bundle.js",
    publicPath: "/static/"
  },
  module: {
    loaders: [
      {
        test: /\.js(x?)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: __dirname
      },
      {
        test: /\.s*css$/,
        loaders: [
          'style-loader',
          'css-loader?modules&localIdentName=[name]__[local]__[hash:base64:5]',
          'sass-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", "*"]
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
}
