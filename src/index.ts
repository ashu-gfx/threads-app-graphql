import express from 'express'

import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import bodyParser from 'body-parser'

import createApolloGraphqlServer from './graphql'
import UserService from './services/user'

async function startServer () {
  const app = express()
  const PORT = Number(process.env.PORT) || 8000

  // JSON support and CORS
  app.use(cors())
  app.use(bodyParser.json())

  app.get('/', (req, res) => {
    res.json({ message: 'Server is up and running' })
  })

  // Mount GraphQL middleware
  app.use(
    '/graphql',
    expressMiddleware(await createApolloGraphqlServer(), {
      context: async ({ req }) => {
        // @ts-ignore
        const token = req.headers['token']
        console.log(req.headers)
        // return {
        //   myName: 'Ashu'
        // }
        try {
          const user = UserService.decodeJWTToken(token as string)
          return { user }
        } catch (error) {
          return {};
        }
      }
    })
  )

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
  })
}

startServer()
