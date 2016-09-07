var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var webpack = require('webpack');
module.exports = {
    plugins: [
        new ExtractTextPlugin("[name].css"), 
        new webpack.optimize.UglifyJsPlugin(),
        new webpack.ProvidePlugin({
			$: 'jquery',
		}),
        ],
    entry: {
        "main" : './src/entry.js',
        "other" : './src/other.js'
    },
    output:{
        path : path.join(__dirname,'out'),
        publicPath: './out/',
        filename: '[name].bundle.js'
    },
    externals:{
        'react' : 'React'
    },
    module:{
         loaders: [
            { test: /\.js$/, loader: "jsx!babel", include: /src/},
            { test: /\.css$/, loader: "style!css"},
            { test: /\.scss$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader")},
            { test: /\.(jpg|png|svg)$/, loader: "url?limit=8192"}
        ]
    }
};