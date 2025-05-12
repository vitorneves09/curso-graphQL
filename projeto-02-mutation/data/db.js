let id = 1;
function proximoId() {
  return id++;
}

const usuarios = [
  {
      id: proximoId(), nome: "Lucas", email: "lucas@teste.com.br", idade: 21, perfil_id: 1, salario_real: 1000.50, vip: true, status: "ATIVO"
  },
  { id: proximoId(), nome: "Isabelle", email: "Isabelle@teste.com.br", idade: 30, perfil_id: 2, salario_real: 2000.50, vip: false , status: "INATIVO"},
    { id: proximoId(), nome: "Vitor", email: "vitor@email.com", idade: 25, perfil_id: 1, salario_real: 1500.50, vip: true , status: "ATIVO"},
  ];
  
  const perfis = [
    { id: 1, perfil: "ADMIN" },
    { id: 2, perfil: "COMUN" }
  ];


module.exports = {
  usuarios,
  perfis
};