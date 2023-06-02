import express, { json } from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello: () => {
    return 'Hello, World!'
  },
}

export function createRouter() {
  const router = express()
  router.use(json())

  router.use('/graphql', graphqlHTTP({
    schema,
    rootValue: root,
    graphiql: true,
  }))

  return router
}
