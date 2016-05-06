var Glue = require('glue')
var routes = require('./routes')
var manifest = require('./manifest.js')

var options = {
  relativeTo: __dirname
}

Glue.compose(manifest, options, function (err, server) {
  if (err) {
    throw err
  }

  server.route(routes)

  server.start(function (err) {
    var details = {
      name: 'app-site',
      uri: server.info.uri
    }

    if (err) {
      throw err
    }

    server.log('info', 'Server started')
    server.log('info', details)
  })
})
