import { ApolloServer } from '@apollo/server'
import { prismaClient } from './lib/db'
import { User } from './user'

async function createApolloGraphqlServer () {
  // Apollo Server with a basic schema
  const server = new ApolloServer({
    typeDefs: `
            ${User.typeDefs}
            type Query {
               ${User.queries}
            }

            type Mutation {
               ${User.mutations}
            }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
      Mutation: {
        ...User.resolvers.mutations,
      },
    },
  });
  await server.start()

  return server
}

export default createApolloGraphqlServer
