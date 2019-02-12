const path = require('path'); // The path module provides utilities for working with file and directory paths

module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    ]
  },
  watch: true,
  mode: 'development', // mode can be 'development', 'production' or 'none'. 'production' mode enables compressing for output file
  entry: {
    script2: './src/js/script2.js',
    script3: './src/js/script3.js',
    script4: './src/js/script4.js',
  }, // An entry point indicates which module webpack should use to begin building
  output: { // The output property tells webpack where to emit the bundles it creates and how to name these files
    filename: 'js/[name].js', // output.filename tells webpack the name of our bundle
    path: path.resolve(__dirname, 'dist') // output.path tells webpack where we want our bundle to be emitted to
  }
};