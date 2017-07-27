var webpack = require('webpack')
module.exports = require('./webpack.config.js')

// disable the hot reload
module.exports.entry = [
  'babel-polyfill',
  __dirname + '/' + module.exports.app_root + '/index.js'
]

// development env
module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('development'),
      API_URL: JSON.stringify('http://localhost:9292/'),
    }
  })
)
