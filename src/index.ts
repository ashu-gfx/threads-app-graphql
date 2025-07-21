import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import bodyParser from 'body-parser'

async function startServer () {
  const app = express()
  const PORT = Number(process.env.PORT) || 8000

  // JSON support and CORS
  app.use(cors())
  app.use(bodyParser.json())

  // Apollo Server with a basic schema
  const server = new ApolloServer({
    typeDefs: `
      type Query {
        hello: String
        say(name: String): String
      }
    `,
    resolvers: {
      Query: {
        hello: () => "Hey there I am a GraphQL server",
        say: (_,{name}:{name:String}) =>{ return `Hey ${name}, how are you?`}
      }
    }
  })

  await server.start()

  app.get('/', (req, res) => {
    res.json({ message: 'Server is up and running' })
  })

  // Mount GraphQL middleware
  app.use('/graphql', expressMiddleware(server))

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
  })
}

startServer()
