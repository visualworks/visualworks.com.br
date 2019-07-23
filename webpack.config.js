const path = require("path");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: `${path.resolve(__dirname, "src")}/index.jsx`,
    output: {
        path: path.resolve(__dirname, "dist/"),
        filename: "index.js",
        crossOriginLoading: "anonymous",
    },
    module: {
        rules: [
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(css|scss|sass)$/,
                include: [
                    path.resolve(__dirname, "src")
                ],
                exclude: /node_modules/,
                loader: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: ["file-loader"]
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
            path.resolve(__dirname, "src")
        ],
        extensions: ["*", ".js", ".jsx", ".scss", ".css"]
    },
    performance: {
        hints: "warning",
        maxAssetSize: 600000,
        maxEntrypointSize: 600000,
        assetFilter: function (assetFilename) {
            return assetFilename.endsWith(".css") || assetFilename.endsWith(".js");
        }
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2
                }
            }
        }
    },
    target: "web",
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                "NODE_ENV": process.env.NODE_ENV ? JSON.stringify(process.env.NODE_ENV) : "production"
            }
        }),
        new UglifyJsPlugin(),
        new HTMLWebpackPlugin({
            title: "Visual Works - Web & Mobile Development",
            author: "Visual Works",
            description: "A freelancing agency ran by Henrique Mattos leveraging web and mobile development in the cloud. Hosting applications in AWS and e-mails in Google's G Suite, Visual Works has 13 years of history with projects ranging from front-end to back-end and APIs, including ReactJS, PHP, MySQL, Memcached and others cutting-edge technologies.",
            url: "https://www.visualworks.com.br",
            image: "https://www.visualworks.com.br/img/logo-visual-works.png",
            filename: path.resolve(__dirname, "dist/index.html"),
            template: path.resolve(__dirname, "src/index.html")
        }),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "src/img"),
                to: path.resolve(__dirname, "dist/img")
            }
        ]),
        new CopyWebpackPlugin([
            {
                from: path.resolve(__dirname, "src/fonts"),
                to: path.resolve(__dirname, "dist/fonts")
            }
        ])
    ],
    // advanced
    parallelism: 2,
    profile: true,
    cache: true
};
