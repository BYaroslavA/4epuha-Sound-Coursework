import { Reveal } from '@/shared/ui/Reveal';
import styles from './Features.module.css';

export function Features() {
  const features = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M6 12h.01M18 12h.01" />
        </svg>
      ),
      title: 'Analog Warmth',
      desc: 'We source components that introduce harmonically rich saturation. It is not just about signal flow; it is about the texture of sound that digital plugins struggle to replicate. Feel the difference.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      title: 'Studio Quality',
      desc: 'Every unit undergoes rigorous stress testing by professional engineers. Built to survive 24-hour sessions and rugged tour schedules without compromising audio fidelity.'
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
      ),
      title: 'Global Delivery',
      desc: 'From our lab in Europe to your studio anywhere on Earth. We use secure, insured shipping partners to ensure your gear arrives ready to rock, no matter the distance.'
    },
  ];

  return (
    <section className={styles.section}>
      <Reveal width="100%">
        <div className={styles.grid}>
          {features.map((feature, i) => (
            <Reveal key={i} delay={i * 0.2} width="100%">
              <div className={styles.card}>
                <div className={styles.iconWrapper}>
                  <span className={styles.icon}>{feature.icon}</span>
                </div>
                <h3 className={styles.title}>{feature.title}</h3>
                <p className={styles.text}>{feature.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
