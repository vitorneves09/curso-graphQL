

module.exports = {
    precoComDesconto(produto) {
      return produto.desconto ? produto.preco - (produto.preco * produto.desconto) : produto.preco;
    }
  }