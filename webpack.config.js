const path = require("path");

module.exports = {
    mode: "production",
    entry: "./build/index.js",
    resolve: {
        extensions: [".tsx", ".ts", ".js", ".jsx"],
        modules: [
            path.resolve(__dirname, "build"),
            "node_modules"
        ]
    },
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                        plugins: ["@babel/plugin-transform-runtime"]
                    }
                }
            }
        ]
    }
};