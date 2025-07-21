import express from 'express'

import { expressMiddleware } from '@as-integrations/express5'
import cors from 'cors'
import bodyParser from 'body-parser'

import createApolloGraphqlServer from './graphql'

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
  app.use('/graphql', expressMiddleware(await createApolloGraphqlServer()))

  app.listen(PORT, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}/graphql`)
  })
}

startServer()
