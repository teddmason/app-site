module.exports = {
  server: {
    host: '0.0.0.0',
    port: process.env.PORT || 3000
  },
  logging: {
    ops: {
      interval: 3600000
    },
    reporters: {
      console: [{
        module: 'good-console',
        args: [{
          error: '*',
          log: '*',
          request: '*',
          response: '*'
        }]},
      'stdout']
    }
  }
}
