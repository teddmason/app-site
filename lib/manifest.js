var config = require('../config')

module.exports = {
  server: {
    connections: {
      routes: {
        security: true,
        state: {
          failAction: 'ignore'
        }
      }
    }
  },
  connections: [
    {
      host: config.server.host,
      port: config.server.port
    }
  ],
  registrations: [
    {
      plugin: {
        register: 'inert'
      }
    }, {
      plugin: {
        register: 'good',
        options: config.logging
      }
    }
  ]
}
