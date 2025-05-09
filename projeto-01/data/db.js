const usuarios = [
    { id: 1, nome: "Lucas", email: "lucas@teste.com.br", idade: 21, perfil_id: 1, salario_real: 1000.50, vip: true },
    { id: 2, nome: "Isabelle", email: "Isabelle@teste.com.br", idade: 30, perfil_id: 2, salario_real: 2000.50, vip: false },
    { id: 3, nome: "Vitor", email: "vitor@email.com", idade: 25, perfil_id: 1, salario_real: 1500.50, vip: true }
  ];
  
  const perfis = [
    { id: 1, perfil: "admin" },
    { id: 2, perfil: "comum" }
  ];


module.exports = {
  usuarios,
  perfis
};