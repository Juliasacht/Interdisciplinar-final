import { Produto} from './Produto';

export class Eletronico extends Produto {
  constructor(
    id: number,
    nome: string,
    marca: string,
    preco: number,
    descricao: string,
    imagem: string
  ) {
    super(id, nome, marca, preco, descricao, 'Eletronico', imagem);
  }
}
