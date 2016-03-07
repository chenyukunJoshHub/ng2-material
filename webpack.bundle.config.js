module.exports = {
  entry: {
    'all.webpack.scripts': './ng2-material/webpack_scripts.js'
  },
  output: {
    libraryTarget: 'commonjs',
    path: './out/',
    filename: "[name].js"
  },
  resolve: {
    extensions: ['', '.js']
  },
  externals: [
    /angular2\/.*/
  ]
};
