var path = require('path');
var webpack = require('webpack');
var reactDomLibPath = path.join(__dirname, "./node_modules/react-dom/lib");
var alias = {};
["EventPluginHub", "EventConstants", "EventPluginUtils", "EventPropagators",
 "SyntheticUIEvent", "CSSPropertyOperations", "ViewportMetrics"].forEach(function(filename){
    alias["react/lib/"+filename] = path.join(__dirname, "./node_modules/react-dom/lib", filename);
});


module.exports = {
    devServer: {
        inline: true,
        contentBase: './src',
        port: 9001,
        historyApiFallback: true
    },
    devtool: 'cheap-module-eval-source-map',
    entry: './dev/js/index.js',
    resolve: {alias: alias},
    module: {
        loaders: [
            {
                test: /\.js$/,
               loaders: ['babel?presets[]=react,presets[]=es2015,presets[]=stage-2'],
                exclude: /node_modules/
            },
            {
                test: /\.scss/,
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin()
    ]
};
