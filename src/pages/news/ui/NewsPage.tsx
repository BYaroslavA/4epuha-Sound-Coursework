import { Button } from '@/shared/ui/Button';
import { Reveal } from '@/shared/ui/Reveal';
import { PageTransition } from '@/shared/ui/PageTransition';
import { newsData } from '@/entities/news/model/news';


export function NewsPage() {
  return (
    <PageTransition>
      <main style={styles.page}>
        <div style={styles.header}>
          <Reveal>
            <h1 style={styles.title}>Music News</h1>
          </Reveal>
          <Reveal delay={0.3}>
            <p style={styles.subtitle}>Latest updates from the world of sound.</p>
          </Reveal>
        </div>

        <div style={styles.grid}>
          {newsData.map((item, i) => (
            <Reveal key={item.id} delay={i * 0.15}>
              <article style={styles.card} className="news-card-hover">
                <div style={styles.imageWrapper}>
                  <img src={item.image} alt={item.title} style={styles.image} />
                </div>
                <div style={styles.content}>
                  <span style={styles.date}>{item.date}</span>
                  <h2 style={styles.cardTitle}>{item.title}</h2>
                  <p style={styles.excerpt}>{item.excerpt}</p>
                  <Button variant="outline" style={{ marginTop: 'auto' }}>Read More</Button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </main>
    </PageTransition>
  );
}

const styles = {
  page: {
    padding: '40px 32px 80px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
  },
  header: {
    textAlign: 'center' as const,
    marginBottom: '64px',
  },
  title: {
    fontSize: '48px',
    fontWeight: 700,
    marginBottom: '16px',
    background: 'linear-gradient(135deg, #fff 0%, #888 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '18px',
    color: 'var(--text-secondary)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
    gap: '32px',
  },
  card: {
    background: 'var(--bg-secondary)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column' as const,
    transition: 'transform 0.3s var(--ease)',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  imageWrapper: {
    height: '240px',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover' as const,
    transition: 'transform 0.5s var(--ease)',
  },
  content: {
    padding: '24px',
    display: 'flex',
    flexDirection: 'column' as const,
    flex: 1,
    gap: '16px',
  },
  date: {
    fontSize: '14px',
    color: 'var(--accent)',
    fontWeight: 600,
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 600,
    margin: 0,
    lineHeight: 1.4,
  },
  excerpt: {
    fontSize: '16px',
    color: 'var(--text-secondary)',
    lineHeight: 1.6,
    margin: 0,
    flex: 1,
  },
};
