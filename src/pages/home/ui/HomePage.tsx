import { Hero } from '@/widgets/hero';
import { Features } from '@/widgets/features';
import { TrendingProducts } from '@/widgets/trending-products';
import { NewsCarousel } from '@/widgets/news-carousel';
import { CategoryCards } from '@/widgets/category-cards';
import { PageTransition } from '@/shared/ui/PageTransition';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './HomePage.module.css';

export function HomePage() {
  const testimonials = [
    {
      text: "The 'Quiet Rhythm' hoodie is more than clothing. It's an extension of my studio persona. The sound isolation is no joke.",
      author: "Alex V.",
      role: "Techno Producer"
    },
    {
      text: "4EPUHA's curation of analog gear and their custom services are unmatched. They truly understand the soul of a creator.",
      author: "Sarah J.",
      role: "Film Composer"
    },
    {
      text: "Finally, a brand that bridges the gap between high-end audio engineering and premium lifestyle aesthetics. Love it.",
      author: "Marcus K.",
      role: "Sound Designer"
    }
  ];

  return (
    <PageTransition>
      <main style={{ paddingTop: '0' }}>
        <Hero />


        <div className={`${styles.container} ${styles.sectionPadding}`}>
          <Reveal width="100%">
            <Features />
          </Reveal>
        </div>


        <div className={styles.partnersSection}>
          <Reveal width="100%">
            <div className={styles.partnersContainer}>
              <h2 className={styles.title} style={{ marginBottom: '40px' }}>Trusted by Industry Giants</h2>
              <div className={styles.partnersBar}>
                <span className={styles.partnerLogo}>SONY MUSIC</span>
                <span className={styles.partnerLogo}>ABLETON</span>
                <span className="partner-logo">MOOG</span>
                <span className={styles.partnerLogo}>WARNER BROS</span>
                <span className={styles.partnerLogo}>SPITFIRE AUDIO</span>
              </div>
            </div>
          </Reveal>
        </div>


        <div style={{ width: '100%' }}>
           <Reveal width="100%">
              <CategoryCards />
           </Reveal>
        </div>


        <div className={`${styles.container} ${styles.testimonialsSection}`}>
          <Reveal width="100%">
            <h2 className={`${styles.title} ${styles.centered}`}>Voices of the Community</h2>
            <div className={styles.testimonialsGrid}>
              {testimonials.map((t, i) => (
                <Reveal key={i} delay={i * 0.1} width="100%">
                  <div className={styles.testimonialCard}>
                    <p className={styles.quoteText}>"{t.text}"</p>
                    <div className={styles.quoteAuthor}>
                      <div className={styles.authorInfo}>
                        <h4>{t.author}</h4>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>


        <Reveal width="100%">
          <section className={styles.aboutSection}>
            <div className={styles.container}>
              <div className={styles.splitLayout}>
                <div className={styles.aboutHeroImage}>
                  <img
                    src="https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=1200&auto=format&fit=crop"
                    alt="Studio Mission"
                  />
                </div>
                <div className={styles.aboutContent}>
                  <h2 className={styles.title}>Beyond the Gear</h2>
                  <p className={styles.description}>
                    We believe that the best music comes from a place of deep connection.
                    That's why we build tools that don't just sit in a rack, but become
                    a part of your creative expression.
                  </p>
                  <p className={styles.description}>
                    From the tactile feel of our knobs to the carefully calibrated
                    response of our circuits, every detail is considered to keep you
                    in the flow state.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <div className={`${styles.container} ${styles.bottomSpacing}`}>
          <NewsCarousel />
          <TrendingProducts />
        </div>
      </main>
    </PageTransition>
  );
}
