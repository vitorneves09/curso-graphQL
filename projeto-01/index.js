const { ApolloServer, gql } = require('apollo-server');

const usuarios = [
    {
        id: 1,
        nome: "Lucas",
        email: "lucas@teste.com.br",
        idade: 21,
        perfil_id: 1,
        salario_real: 1000.50,  
        vip: true
    },
    {
        id: 2,
        nome: "Isabelle",
        email: "Isabelle@teste.com.br",
        idade: 30,
        perfil_id: 2,
        salario_real: 2000.50,
        vip: false
    },
    {
        id: 3,
        nome: "Vitor",
        email: "vitor@email.com",
        idade: 25,
        perfil_id: 1,
        salario_real: 1500.50,
        vip: true
    }
];

const perfis = [
    {
        id: 1,
        perfil: "admin"
    },
    {
        id: 2,
        perfil: "comum"
    },
]

// ponto de entrada das informações 
// É obrigatório definir o schema QUERY
// Precisamos criar todos os tipo e declaram dentro das query 
// Caso eu precise 
const typeDefs = gql`

    type Perfil{
        id: ID!,
        perfil: String!
    }

    scalar Date

    type Usuario{
        id: ID!
        nome: String!
        email: String!
        idade: Int
        salario: Float,
        vip: Boolean,
        perfil_id: Int,
        perfil: Perfil
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
        produto: Produto,
        numerosMegaSena:[Int!]!,
        usuarios: [Usuario!]!,
        usuario(id: ID!): Usuario,
        perfis: [Perfil!]!
        perfil(id: ID!): Perfil
    }
`;



// Resolvers
const resolvers = {
    Usuario: {
        salario(usuario) {
            return usuario.salario_real
        },
        perfil(usuario) {
            const perfil = perfis.find(perfil => perfil.id == usuario.perfil_id)
            
            if (!perfil) {
                return null;
            }

            return {
                id: perfil.id,
                perfil: perfil.perfil
            };
            
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
        },
        numerosMegaSena() {

            const crescente = (a, b) => a - b;

            return Array(6).fill(0).map(() => {
                return Math.floor(Math.random() * 60) + 1
            }).sort(crescente);
        },
        usuarios() {
            return usuarios
        },
        // Sempre o primeiro parametro de um RESOLVER é o Objeto pai
        // No caso de uma query, o primeiro parametro é sempre null
        usuario(_, { id }) {
            const usuario = usuarios.find(usuario => usuario.id == id)
            
            if (!usuario) {
                return null;
            }

            return usuario
            
        },
        perfis() {
            return perfis;
        },
        perfil(_, { id }) {
            const perfil = perfis.find(perfil => perfil.id == id)
            
            if (!perfil) {
                return null;
            }

            return perfil;
        }
    }
};

// Inicialização do servidor
const server = new ApolloServer({ typeDefs, resolvers });

// Start
server.listen().then(({ url }) => {
  console.log(`🚀 Server running at ${url}`);
});
