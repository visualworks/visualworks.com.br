const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "index.js"
    },
    module: {
        loaders: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                    presets: ["react"]
                }
            },
            {
                test: /\.(css|scss|less|sass)$/,
                include: [
                    path.resolve(__dirname, "src/css")
                ],
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [
                        "css-loader",
                        "sass-loader"
                    ]
                })
            },
            {
                test: /\.(woff|woff2|eot|ttf)(\?.*$|$)/,
                loader: ["file-loader?fonts/[name].[ext]"]
            },
            {
                test: /\.(jpeg|jpg|gif|png|svg)(\?.*$|$)/,
                loader: ["file-loader?name=/img/[name].[ext]"]
            }
        ]
    },
    resolve: {
        modules: [
            "node_modules",
            path.resolve("./src")
        ],
        extensions: [".js", ".jsx", ".scss"]
    },
    performance: {
        hints: "warning",
        maxAssetSize: 400000,
        maxEntrypointSize: 400000,
        assetFilter: function(assetFilename) {
            return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
        }
    },
    devtool: "cheap-module-source-map", // "source-map" | eval" || "cheap-module-source-map" || "cheap-source-map" || "eval-source-map" || "inline-source-map"
    target: "web",
    stats: "detailed",
    plugins: [
        new UglifyJsPlugin(),
        new ExtractTextPlugin("./css/style.css"),
        new HTMLWebpackPlugin({
            title: "Visual Works - Web & Mobile Development",
            author: "Visual Works",
            description: "Description of this project",
            url: "https://www.visualworks.com.br",
            image: "https://www.visualworks.com.br/img/logo-visual-works.png",
            filename: path.resolve(__dirname, "dist/index.html"),
            template: path.resolve(__dirname, "src/index.html")
        }),
        new CopyWebpackPlugin([{
            from: path.resolve(__dirname, "src/img"),
            to: path.resolve(__dirname, "dist/img")
        }]),
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": JSON.stringify("development")
            }
        }),
    ],
    // advanced
    parallelism: 2,
    profile: true,
    cache: false,
    watch: true
};