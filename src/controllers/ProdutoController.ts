import { Produto } from '../models/Produto';

export class ProdutoController {
  private produtos: Produto[] = [];
  private favoritos: Produto[] = [];

  adicionarProdutos(lista: Produto[]) {
    this.produtos = lista;
  }

  listarProdutos(): Produto[] {
    return this.produtos;
  }

  pesquisarProdutos(criterio: string): Produto[] {
    return this.produtos.filter(p => p.pesquisarPorCriterio(criterio));
  }

  adicionarFavorito(produto: Produto) {
    if (!this.favoritos.find(p => p.id === produto.id)) {
      this.favoritos.push(produto);
    }
  }

  listarFavoritos(): Produto[] {
    return this.favoritos;
  }

  removerFavorito(id: number) {
    this.favoritos = this.favoritos.filter(p => p.id !== id);
  }
}
