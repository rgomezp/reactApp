var webpack = require('webpack');

module.exports = {
  // SPECIFIES THE PATH TO FILE CONTAINING APP
  entry   : './reactApp/app.js',

  // HOLDS OUTPUT DATA
  output  : {
    // absolute path where output file should go
    // (path must be absolute)
    path      : __dirname + '/build',

    // name of file output by the build
    filename  : 'app.bundle.js'
  },

  // TELLS BABEL HOW TO RUN
  module  : {
    // rules to follow at build time
    rules : [
      // run Babel on all files ending in .js
      // exclude those in node_modules
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  },

  /* Lastly, we'll add two keys that are purely nice-to-have's. We're making webpack's output colorful by means of the stats key, and we're turning on the sourcemapping so the line numbers of the input and output files match exactly (which is a great help for debugging during development). (Sometimes steps need to be taken in Chrome to enable sourcemapping. If you encounter this issue you can call over a TA or move on without it.)*/
  stats : {
    colors  : false
  },
  devtool : 'source-map'
};
