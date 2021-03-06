const { environment } = require('@rails/webpacker')

module.exports = environment

const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.PrividePlugin({
    $: 'jquery/src/jquery',
    JQuery: 'jquery/src/jquery',
    Popper: 'popper.js'
  })
  )
