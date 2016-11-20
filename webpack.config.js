var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var config = {
    context: path.join(__dirname, "src"),
    entry: "./app/index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss?$/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: __dirname + "/src/",
        filename: "index.min.js"
    }
};

module.exports = config;