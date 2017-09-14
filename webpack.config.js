const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: ['whatwg-fetch', './scss/bundle.scss', './js/index.jsx'],
    output: {
        path: path.resolve("dist"),
        filename: 'index.js',
        publicPath: 'https://twilczek88.github.io/'
    },
    devServer:	{
        inline:	true,
        contentBase: './',
        historyApiFallback: true,
        port: 3001
    },
    watch: true,
    module: {
        rules: [
            {
                test: /\.jsx$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    query: {
                        presets: ['es2015', 'stage-2', 'react']
                    }
                }],
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false,
                                modules: true,
                                importLoaders: 2,
                                localIdentName: '[name]__[local]___[hash:base64:6]',
                            }
                        },
                        {
                            loader: 'sass-loader'
                        },
                        {
                            loader: 'autoprefixer-loader'
                        }
                    ],
                }),
            },
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: 'app.css',
            allChunks: true
        })
    ]
};
