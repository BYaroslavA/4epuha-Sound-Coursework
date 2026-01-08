import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { products } from '@/entities/product/model/mock';
import { ProductCard } from '@/entities/product/ui/ProductCard';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './TrendingProducts.module.css';

export function TrendingProducts() {
  const trendingIds = ['1', '13', '4', '15'];
  const trending = products.filter(p => trendingIds.includes(p.id));

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <Reveal width="100%">
          <h2 className={styles.title}>Trending Now</h2>
        </Reveal>
        <Reveal delay={0.3} width="100%">
          <Link to="/products">
            <Button variant="outline">View All</Button>
          </Link>
        </Reveal>
      </div>

      <div className={styles.grid}>
        {trending.map((product, i) => (
          <Reveal key={product.id} delay={i * 0.15} width="100%">
            <ProductCard product={product} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}

