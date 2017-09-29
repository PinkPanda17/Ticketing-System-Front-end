
 const path = require('path');
//  const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
 const webpack = require('webpack');
 var alias = {};
["EventPluginHub", "EventConstants", "EventPluginUtils", "EventPropagators",
 "SyntheticUIEvent", "CSSPropertyOperations", "ViewportMetrics"].forEach(function(filename){
    alias["react/lib/"+filename] = path.join(__dirname, "./node_modules/react-dom/lib", filename);
});
 
 module.exports = {
   entry: './dev/js/index.js',
   output: {
        path: 'src',
        filename: 'js/bundle.min.js'
    },
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
   plugins: [
    //  new UglifyJsPlugin({
    //    cacheFolder: path.resolve(__dirname, 'public/cached_uglify'),
    //    debug: false,
    //    minimize: true,
    //    sourceMap: false,
    //    output: {
    //      comments: false
    //    },
    //    compressor: {
    //        warnings: false
    //    }
    //  }),
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     })
   ]
 };