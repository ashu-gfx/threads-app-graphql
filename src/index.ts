import express from 'express'
import { ApolloServer } from '@apollo/server'
import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import bodyParser from 'body-parser'
import { prismaClient } from './lib/db'

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

     type Mutation{
     createUser(firstName: String!, lastName: String!, email: String!, password: String!): Boolean
     }
    `,
    resolvers: {
      Query: {
        hello: () => 'Hey there I am a GraphQL server',
        say: (_, { name }: { name: String }) => {
          return `Hey ${name}, how are you?`
        }
      },
      Mutation: {
        createUser: async (
          _,
          {
            firstName,
            lastName,
            email,
            password
          }: {
            firstName: string
            lastName: string
            email: string
            password: string
          }
        ) => {
            await prismaClient.user.create({
                data:{
                    email,
                    firstName,
                    lastName,
                    password,
                    salt: "random_salt"
                }
            })
            return true
        }
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
