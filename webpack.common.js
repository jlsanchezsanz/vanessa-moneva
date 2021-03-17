module.exports = {
    entry: {
        main: './src/js/main.js',
        vendor: './src/js/vendor.js',
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader'],
            },
            {
                test: /\.(svg|png|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[hash].[ext]',
                        outputPath: 'imgs',
                    },
                },
            },
            {
                loader: 'babel-loader',
                test: /\.js$/,
                exclude: /node_modules/,
            },
        ],
    },
};
