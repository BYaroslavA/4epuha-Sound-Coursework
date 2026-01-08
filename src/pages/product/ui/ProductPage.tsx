import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { products } from '@/entities/product/model/mock';
import { useCart } from '@/entities/cart';
import { Button } from '@/shared/ui/Button';
import { PageTransition } from '@/shared/ui/PageTransition';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './ProductPage.module.css';

export function ProductPage() {
  const { id } = useParams();
  const { addToCart, state } = useCart();
  const product = products.find((p) => p.id === id);
  
  const [selectedSize, setSelectedSize] = useState<string | undefined>();

  useEffect(() => {
    if (product?.sizes?.length) {
      setSelectedSize(product.sizes[0]);
    }
  }, [product]);

  if (!product) {
    return (
      <main className={styles.errorPage}>
        <h1>Product not found</h1>
        <Link to="/products">
          <Button>Back to Catalog</Button>
        </Link>
      </main>
    );
  }


  const inCartItem = state.items.find(
    (item) => item.product.id === product.id && (!product.sizes || item.size === selectedSize)
  );

  return (
    <PageTransition>
      <main className={styles.page}>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div className={styles.imageColumn}>
              <div className={styles.imageWrapper}>
                <img src={product.image} alt={product.title} className={styles.image} />
              </div>
            </div>

            <div className={styles.infoColumn}>
              <Reveal>
                <div className={styles.breadcrumbs}>
                  <Link to="/products" className={styles.backLink}>← Back to Catalog</Link>
                </div>
              </Reveal>
              
              <Reveal delay={0.2}>
                <h1 className={styles.title}>{product.title}</h1>
              </Reveal>

              <Reveal delay={0.3}>
                <div className={styles.price}>{product.price} ₴</div>
              </Reveal>

              <Reveal delay={0.4}>
                <p className={styles.description}>{product.description}</p>
              </Reveal>

              {product.sizes && (
                <Reveal delay={0.45}>
                  <div className={styles.sizes}>
                    <span className={styles.sizeLabel}>Size:</span>
                    <div className={styles.sizeList}>
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
                  </div>
                </Reveal>
              )}

              <Reveal delay={0.5}>
                <div className={styles.actions}>
                  {!inCartItem ? (
                    <Button 
                      variant="primary" 
                      onClick={() => addToCart(product, selectedSize)}
                      className={styles.fullWidth}
                      disabled={product.sizes && !selectedSize}
                    >
                      Add to Cart
                    </Button>
                  ) : (
                    <div className={styles.added}>
                      <span className={styles.addedText}>✓ In Cart ({inCartItem.quantity})</span>
                      <Link to="/cart" className={styles.flexOne}>
                        <Button variant="outline" className={styles.fullWidth}>Go to Cart</Button>
                      </Link>
                    </div>
                  )}
                </div>
              </Reveal>

              <Reveal delay={0.6}>
                <div className={styles.features}>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🚚</span>
                    <span>Free shipping in Kyiv</span>
                  </div>
                  <div className={styles.feature}>
                    <span className={styles.featureIcon}>🛡️</span>
                    <span>12 months warranty</span>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </main>
    </PageTransition>
  );
}