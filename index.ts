import fastify from 'fastify'

const app = fastify()

// app.get()

app.listen({ port: 3000 }, (_, address) =>
  console.log(`🏃 Running on ${address}`),
)
