
import { useEffect, useState } from 'react';
import styles from './CardProduto.module.css';
import { Produto } from '../models/Produto';

interface Props {
  produto: Produto;
  onFavoritar?: (produto: Produto) => void;
  aoRemover?: () => void;
  mostrarRemover?: boolean;
}

export default function CardProduto({ produto, onFavoritar, aoRemover, mostrarRemover = false }: Props) {
  const [favoritado, setFavoritado] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    const jaFavoritado = favoritos.some((p: Produto) => p.id === produto.id);
    setFavoritado(jaFavoritado);
  }, [produto.id]);

  const alternarFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem('favoritos') || '[]');
    let novosFavoritos;

    if (favoritado) {
      novosFavoritos = favoritos.filter((p: Produto) => p.id !== produto.id);
    } else {
      novosFavoritos = [...favoritos, produto];
    }

    localStorage.setItem('favoritos', JSON.stringify(novosFavoritos));
    setFavoritado(!favoritado);
    if (onFavoritar) onFavoritar(produto);
  };

  return (
    <div className={styles.card}>
      <img src={produto.imagem} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>{produto.marca}</p>
      <p>R$ {produto.preco.toFixed(2)}</p>
      {mostrarRemover ? (
        <button onClick={aoRemover} className={styles.remover}>💔 Remover</button>
      ) : (
        <button onClick={alternarFavorito}>
          {favoritado ? '❤️ Remover' : '🤍 Favoritar'}
        </button>
      )}
    </div>
  );
}
