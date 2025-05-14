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
    },
    deletarUsuario(_, { id }) {
        const usuarioIndex = usuarios.findIndex(usuario => usuario.id === id);
       
        const usuarioRemovido = usuarios.splice(usuarioIndex, 1);
        return usuarioRemovido[0];
    }
};