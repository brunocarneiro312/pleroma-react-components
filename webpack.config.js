const webpack = require('webpack');

module.exports = {
    entry: './app/index.js',
    output: {
        path: '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    }
}