module.exports = {
  method: 'GET',
  path: '/',
  handler: function (request, reply) {
    reply.file('./lib/views/index.html')
  }
}
