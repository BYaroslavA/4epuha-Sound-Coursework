import { products, ProductCard } from '@/entities/product';
import { PageTransition } from '@/shared/ui/PageTransition';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './ProductsPage.module.css';

export function ProductsPage() {
  const categories = ['Clothing', 'Accessories', 'Studio Gear'];

  return (
    <PageTransition>
      <main className={styles.page}>
        <Reveal>
          <h1 className={styles.title}>Catalog</h1>
        </Reveal>

        {categories.map((category) => {
          const categoryProducts = products.filter((p) => p.category === category);
          if (categoryProducts.length === 0) return null;

          return (
            <section key={category} className={styles.categorySection}>
              <Reveal>
                <h2 className={styles.categoryTitle}>{category}</h2>
              </Reveal>
              <div className={styles.grid}>
                {categoryProducts.map((product, index) => (
                  <Reveal key={product.id} delay={index * 0.1}>
                    <ProductCard product={product} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </main>
    </PageTransition>
  );
}
