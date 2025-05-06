const { ApolloServer, gql } = require('apollo-server');


// ponto de entrada das informações 
// É obrigatório definir o schema QUERY
// Precisamos criar todos os tipo e declaram dentro das query 
// Caso eu precise 
const typeDefs = gql`
    scalar Date

    type Usuario{
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }

    # Pontos de entrada da API
    type Query{
        ola: String,
        horaAtual: Date,
        usuarioLogado: Usuario
    }
`;

// Resolvers
const resolvers = {
    Query: {
        ola() {
            return "Wello world ola"
        },
        horaAtual() {
            return `${new Date}`
        },
        usuarioLogado() {
            
        }
    }
};

// Inicialização do servidor
const server = new ApolloServer({ typeDefs, resolvers });

// Start
server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
