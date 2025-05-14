const { proximoId,usuarios } = require('../data/db');

module.exports = {
    novoUsuario(_, { nome, email, idade }) {
        const novo = {
            id: proximoId(),
            nome:nome,
            email: email,
            idade: idade,
        }

        usuarios.push(novo);

        return novo
    }
};