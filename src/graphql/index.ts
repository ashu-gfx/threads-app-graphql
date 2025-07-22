import { ApolloServer } from '@apollo/server'
import { prismaClient } from './lib/db'
import { User } from './user'

async function createApolloGraphqlServer () {
  // Apollo Server with a basic schema
  const server = new ApolloServer({
    typeDefs: `#graphql
            ${User.typeDefs}
            type Query {
               ${User.queries}
               getContext: String
            }

            type Mutation {
               ${User.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,

        getContext: (_: any, __: any, context: any) => {
          console.log('context', context)
          return 'okay'
        }
      },
      Mutation: {
        ...User.resolvers.mutations
      }
    }
  })
  await server.start()

  return server
}

export default createApolloGraphqlServer
