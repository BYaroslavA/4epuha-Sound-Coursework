import styles from './Reviews.module.css';

export function Reviews() {
  const reviews = [
    {
      id: 1,
      author: 'Alex M.',
      role: 'Audiophile',
      text: 'Sound that changes perception. Detail is top-notch, bass is deep but not booming. Best I have heard for this price.',
      rating: 5,
    },
    {
      id: 2,
      author: 'Elena K.',
      role: 'Musician',
      text: 'I use it to monitor my tracks. Very honest sound. The design is also pleasing to the eye - minimalism and style.',
      rating: 5,
    },
    {
      id: 3,
      author: 'Dmitry V.',
      role: 'Vinyl Collector',
      text: 'Warm, tube sound with analog character. Perfectly reveals old records.',
      rating: 5,
    },
  ];

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>What People Say</h2>
      
      <div className={styles.grid}>
        {reviews.map((review) => (
          <div key={review.id} className={styles.card}>
            <div className={styles.header}>
              <div className={styles.avatar}>{review.author[0]}</div>
              <div>
                <div className={styles.author}>{review.author}</div>
                <div className={styles.role}>{review.role}</div>
              </div>
            </div>
            
            <p className={styles.text}>"{review.text}"</p>
            
            <div className={styles.rating}>
              {'★'.repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
