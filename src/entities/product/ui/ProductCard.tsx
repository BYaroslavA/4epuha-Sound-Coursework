import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/entities/cart';
import type { Product } from '../model/types';
import styles from './ProductCard.module.css';

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  const { addToCart } = useCart();
  const [isAdded, setIsAdded] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | undefined>(
    product.sizes ? product.sizes[0] : undefined
  );

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className={styles.card}>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', display: 'block' }}>
        <div className={styles.imageContainer}>
          <img src={product.image} alt={product.title} className={styles.image} />
        </div>
      </Link>

      <div className={styles.info}>
        <Link to={`/products/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div>
            <h3 className={styles.title}>{product.title}</h3>
            <span className={styles.price}>{product.price} UAH</span>
          </div>
        </Link>
        
        <button 
          onClick={handleAddToCart}
          className={`${styles.button} ${isAdded ? styles.buttonAdded : ''}`}
        >
          {isAdded ? '✓' : '+'}
        </button>
      </div>

      {product.sizes && product.sizes.length > 0 && (
        <div className={styles.sizeSelector}>
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`${styles.sizeButton} ${selectedSize === size ? styles.sizeButtonActive : ''}`}
            >
              {size}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
