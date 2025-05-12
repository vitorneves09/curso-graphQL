const { ApolloServer } = require('apollo-server');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge');
const { loadTypedefsSync } = require('@graphql-tools/load');
const { GraphQLFileLoader } = require('@graphql-tools/graphql-file-loader');

const { Query, Usuario, Produto } = require('./resolvers');

// Carregamento e merge de typeDefs
const loadedTypeDefs = loadTypedefsSync('./schemas/Index.graphql', {
  loaders: [new GraphQLFileLoader()]
});

const typeDefs = mergeTypeDefs(loadedTypeDefs.map(source => source.document));

// Resolvers
const resolvers = mergeResolvers([
    {
        Query,
        Usuario,
        Produto
    }
]);

// Criação do schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

// Inicialização do servidor Apollo
const server = new ApolloServer({ schema });

// Start do servidor
server.listen({port: 4001}).then(({ url }) => {
  console.log(`🚀 Servidor rodando em: ${url}`);
});
