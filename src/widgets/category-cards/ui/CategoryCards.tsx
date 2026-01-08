import { Link } from 'react-router-dom';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './CategoryCards.module.css';

const categories = [
  {
    id: 'gear',
    tag: 'Hardware',
    title: 'Music Equipment',
    image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1200&auto=format&fit=crop',
    link: '/products',
  },
  {
    id: 'merch',
    tag: 'Lifestyle',
    title: 'Studio Wear',
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop',
    link: '/products',
  }
];

export function CategoryCards() {
  return (
    <div className={styles.section}>
      <div className={styles.grid}>
        {categories.map((cat, i) => (
          <Reveal key={cat.id} delay={i * 0.2} width="100%">
            <Link to={cat.link} className={styles.card}>
              <div
                className={styles.cardBg}
                style={{ backgroundImage: `url('${cat.image}')` }}
              />
              <div className={styles.content}>
                <span className={styles.tag}>{cat.tag}</span>
                <h3 className={styles.title}>{cat.title}</h3>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
