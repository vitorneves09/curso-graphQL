const { ApolloServer, gql } = require('apollo-server');


// ponto de entrada das informações 
// É obrigatório definir o schema QUERY
// Precisamos criar todos os tipo e declaram dentro das query 
// Caso eu precise 
const typeDefs = gql`
    scalar Date

    type Usuario{
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float
        vip: Boolean
    }
    
    type Produto{
        id: ID!
        nome: String!   
        preco: Float!
        desconto: Float!
        precoComDesconto: Float!
    }

    # Pontos de entrada da API
    type Query{
        ola: String,
        horaAtual: Date,
        usuarioLogado: Usuario,
        produto: Produto
    }
`;

// Resolvers
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        }
    },
    Produto: {
        precoComDesconto(produto) {
            if (produto.desconto) {
                return produto.preco - (produto.preco * produto.desconto)
            }

            return produto.preco
        }
    },
    Query: {
        ola() {
            return "Wello world ola"
        },
        horaAtual() {
            return `${new Date}`
        },
        usuarioLogado() {
            return {
                id: 1,
                nome: "Lucas",
                email: "lucas@teste.com.br",
                idade: 25,  
                salario_real: 1000.50,
                vip: true
            }
        },
        produto() {
            return {
                id: 1,
                nome: "Produto 1",
                preco: 100,
                desconto: 0.1,
            }
        }
    }
};

// Inicialização do servidor
const server = new ApolloServer({ typeDefs, resolvers });

// Start
server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
