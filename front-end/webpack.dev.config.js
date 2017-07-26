var webpack = require('webpack')
module.exports = require('./webpack.config.js')

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  __dirname + '/' + module.exports.app_root + '/index.js'
]
