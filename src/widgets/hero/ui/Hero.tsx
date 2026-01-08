import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.section}>
      <div className={styles.videoWrapper}>
        <video autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1600&auto=format&fit=crop">
          <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
        </video>
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <Reveal delay={0.2} width="100%">
          <div className={styles.meta}>
            SIGNAL ANALYSIS: 4E.PH // 20-22KHZ // ACTIVE
          </div>
        </Reveal>

        <Reveal delay={0.4} width="100%">
          <h1 className={styles.title}>
            BEYOND <br />
            <span style={{ color: 'var(--accent)' }}>THE VOID</span>
          </h1>
        </Reveal>

        <Reveal delay={0.6} width="100%">
          <p className={styles.subtitle}>
            Premium sonic artifacts for the post-digital architect. 
            Engineered in the laboratory, proven in the rave.
          </p>
        </Reveal>

        <Reveal delay={0.8} width="100%">
          <div className={styles.actions}>
            <Link to="/products">
              <Button variant="primary" size="lg">Initialize Store</Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" size="lg">View Manifesto</Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
