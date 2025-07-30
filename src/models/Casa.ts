import { Produto } from './Produto';

export class Casa extends Produto{
  constructor(
    id: number,
    nome: string,
    marca: string,
    preco: number,
    descricao: string,
    imagem: string
  ) {
    super(id, nome, marca, preco, descricao, 'Casa', imagem);
  }
}
