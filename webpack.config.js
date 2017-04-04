var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        'color/dist/tutorial': './color/src/js/tutorial.js',
        'color/dist/test': './color/src/js/test.js',
        'background/dist/tutorial': './background/src/js/tutorial.js',
        'background/dist/test': './background/src/js/test.js'
    },
    output: {
        path: __dirname,
        filename: '[name].[chunkhash].bundle.js'
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
            chunks: ['color/dist/tutorial'],
            filename: 'color/tutorial.html',
            template: 'color/template/tutorial-tpl.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['color/dist/test'],
            filename: 'color/test.html',
            template: 'color/template/test-tpl.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['background/dist/tutorial'],
            filename: 'background/tutorial.html',
            template: 'background/template/tutorial-tpl.html'
        }),
        new HtmlWebpackPlugin({
            inject: 'body',
            chunks: ['background/dist/test'],
            filename: 'background/test.html',
            template: 'background/template/test-tpl.html'
        })
    ]
}
