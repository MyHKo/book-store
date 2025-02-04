const path = require('path');

module.exports = {
    entry:'./src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
        filename:'bundle.js'
    },
    module: {
        rules: [
            {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        },
            {
                test: /\.(css|scss)$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
      static: path.resolve(__dirname, 'public'),
      port: 3000
    },
    mode: 'development',
}