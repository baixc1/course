const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    devServer: {
        historyApiFallback: true,
        hot: true
    },
    mode: "development", //加上这一句试试
    devtool: 'source-map',
    entry: [
        "./src/main.js"//入口文件
    ],
    output: {
        path: path.resolve(__dirname, './build'),//输出目录及文件
        filename: 'bundle.js'
    },
    module: {
        rules: [//此处不能在用loders,需用rules
            {
                test: /\.js|jsx$/,
                loader: 'babel-loader',//转化成浏览器能解析的js
                query: {
                    presets: ['es2015', 'react', 'stage-0'] //必须先安装babel-preset-es2015和babel-preset-react
                }
            },
            { test: /\.css$/, use: "style!css" }//css样式处理
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './index.html' })
    ],

}