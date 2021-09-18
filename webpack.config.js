const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    entry: '/src/index.js',
    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js',
        clean: true,
    },
    plugins: [new ESLintPlugin(), htmlPlugin],
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};