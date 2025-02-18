const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { watchFile } = require('fs');
module.exports = 
{
    mode: "production",
    entry: "./src/index.js",
    output:
    {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    devtool:"eval-source-map",
    devServer:{
        watchFiles:["./src/template.html"],
    },
    plugins: 
    [
        new HtmlWebPackPlugin({
            template: "./src/template.html"
        }),
    ],
    module:{
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader" ,"css-loader"],
            },
            {
                test: /\.html$/i,
                use: "html-loader",
            },
            {
                test: /\.(png|jpg|jpeg)$/i,
                type: "asset/resource",
            }

        ]
    }
};