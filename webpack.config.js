var path = require('path');
module.exports = {
    entry: {
        app: './app.js',
        test: './test.js'
    },
    output: {
        filename: '[name]-bundle.js'
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
    }
}
