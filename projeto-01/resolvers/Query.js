const { usuarios, perfis } = require('../data/db');

module.exports = {
    ola: () => "Hello world!",
    horaAtual: () => new Date(),
    usuarioLogado: () => ({
      id: 1,
      nome: "Lucas",
      email: "lucas@teste.com.br",
      idade: 25,
      salario_real: 1000.50,
      vip: true
    }),
    produto: () => ({
      id: 1,
      nome: "Produto 1",
      preco: 100,
      desconto: 0.1
    }),
    numerosMegaSena: () => Array(6).fill(0).map(() => Math.floor(Math.random() * 60) + 1).sort((a, b) => a - b),
    usuarios: () => usuarios,
    usuario: (_, { id }) => usuarios.find(usuario => usuario.id === id) || null,
    perfis: () => perfis,
    perfil: (_, { id }) => perfis.find(perfil => perfil.id === id) || null
  }