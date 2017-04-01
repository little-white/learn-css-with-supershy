var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        tutorial: './color/src/js/tutorial.js',
        test: './color/src/js/test.js'
    },
    output: {
        path: __dirname,
        filename: 'color/dist/js/[name].[chunkhash].bundle.js'
    },
    module: {
        // rules: [{
        //     test: /\.css$/,
        //     use: ['style-loader', 'css-loader']
        // }],
        rules: [{
            test: /\.css|html$/,
            use: 'raw-loader'
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['tutorial'],
            filename: 'color/tutorial.html',
            template: 'color/tutorial.html'
        }),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['test'],
            filename: 'color/test.html',
            template: 'color/test.html'
        })
    ]
}
