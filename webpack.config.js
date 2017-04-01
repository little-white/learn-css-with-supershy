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
            inject: 'body',
            chunks: ['tutorial'],
            filename: 'color/tutorial.html',
            template: 'color/template/tutorial-tpl.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['test'],
            filename: 'color/test.html',
            template: 'color/template/test-tpl.html'
        })
    ]
}
