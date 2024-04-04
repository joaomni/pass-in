import fastify from "fastify"

const app = fastify()

app.post('/events', (request, reply) => {
  return request.body
})

app.listen({ port: 3333 }).then(() => {
  console.log('HTTP server running')
})