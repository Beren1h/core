const path = require('path');
const webpack = require('webpack');
const jeet = require('jeet');

module.exports = {
    entry: {
        components: './Client/main.js',
      vendor: [
        "moment",
        "react",
        "react-dom"
      ]
    },
    output: {
        filename: '[name].js', // PROD [name].[chunkhash].js
        path: path.join(__dirname, '/wwwroot/js')
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                enforce: 'pre',
                exclude: /(node_modules)/,
                loader: 'eslint-loader'
            },
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            },
            {
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor', 'manifest']
        }),
        new webpack.IgnorePlugin(/^\.\/locale$/, /moment$/),
        new webpack.LoaderOptionsPlugin({
            test: /\.styl$/,
            stylus: {
                default: {
                    use: [jeet()]
                }
            }
        })
    ],
    devtool: 'cheap-eval-source-map' // PROD source-map
};
