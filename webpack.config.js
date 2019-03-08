module.exports = {
    mode: 'development',
    entry: __dirname + '/src/index.js',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    output: {
        filename: 'transformed.js',
        path: __dirname + '/dist'

    }
}