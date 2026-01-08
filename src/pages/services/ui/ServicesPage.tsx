import { Button } from '@/shared/ui/Button';
import { PageTransition } from '@/shared/ui/PageTransition';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './ServicesPage.module.css';

export function ServicesPage() {
  const services = [
    {
      title: 'Sonic Sculpting & Alchemy',
      description: 'Beyond mere sound design, we perform digital and analog alchemy. We create tailored wavetables, custom modular patches, and avant-garde textures that provide your project with a unique fingerprint. Every sound is synthesized from scratch—no presets, no compromises. We obsess over the micro-detail of every transient and harmonic tail.',
      price: 'From $350',
      tag: 'Innovation',
    },
    {
      title: 'Analog Signal Mastering',
      description: 'Give your music the weight and authority it deserves. Our mastering process routes your audio through a pristine path of legendary hardware: SSL consoles, Fairchild compression, and Pultec equalization. We don\'t just make it loud; we make it musical, adding the warmth, width, and "breath" that only real transformers and vacuum tubes can provide.',
      price: 'From $250',
      tag: 'Heritage',
    },
    {
      title: 'Immersive Studio Sessions',
      description: 'Step into a space designed for creative flow. Our acoustic-treated laboratory is equipped with a curated collection of rare vintage synthesizers and modern modular systems. Whether you need a day of experimental tracking or a focused mixing session, our environment and engineers are here to facilitate your most ambitious sonic visions.',
      price: '$100/hour',
      tag: 'Artisan',
    }
  ];

  const faq = [
    {
      q: 'Do you work with remote clients?',
      a: 'Yes! Over 80% of our clients are global. We use high-fidelity streaming tools for real-time collaboration sessions.'
    },
    {
      q: 'What is the turnaround time for mastering?',
      a: 'Typically 3-5 business days. Express 24-hour delivery is available for urgent projects.'
    },
    {
      q: 'Can I bring my own gear to studio sessions?',
      a: 'Absolutely. We encourage it! We have plenty of patch points and power for your favorite tools.'
    },
    {
      q: 'Do you offer mentorship or workshops?',
      a: 'Yes, we run quarterly workshops on synthesis and analog mixing. Join our newsletter for updates.'
    }
  ];

  const steps = [
    { num: '01', title: 'Consultation', desc: 'We discuss your project vision and sonic goals.' },
    { num: '02', title: 'Execution', desc: 'Our engineers work their magic on high-end hardware.' },
    { num: '03', title: 'Review', desc: 'You receive high-res drafts for feedback and tweaks.' },
    { num: '04', title: 'Delivery', desc: 'Final industry-standard masters or stems in multiple formats.' }
  ];

  return (
    <PageTransition>
      <main style={{ paddingTop: '160px' }}>
        <div className={styles.container}>
          <Reveal width="100%">
            <div className={styles.header}>
              <span className={styles.headerTag}>
                Infinite Fidelity
              </span>
              <h1 className={`${styles.title} ${styles.headerTitle}`}>
                Engineering <br /> <span style={{ color: 'var(--accent)' }}>Sonic Excellence</span>
              </h1>
              <p className={styles.headerDesc}>
                We provide specialized audio engineering and experimental sound design for creators who refuse to settle.
                From the molecular level of synthesis to the final analog polish, we transform your vision into a monument of sound.
              </p>
            </div>
          </Reveal>

          <div className="services-list">
            {services.map((service, index) => (
              <Reveal key={index} delay={index * 0.1}>
                <div className={styles.serviceItem}>
                  <div className={styles.serviceIndex}>
                    0{index + 1}
                  </div>
                  <div className={styles.serviceContent}>
                    <div className={styles.serviceTagWrapper}>
                      <div className={styles.serviceTagLine} />
                      <span className={styles.serviceTag}>
                        {service.tag}
                      </span>
                    </div>
                    <h2 className={`${styles.title} ${styles.serviceTitle}`}>{service.title}</h2>
                    <p className={styles.serviceDesc}>{service.description}</p>
                    <div className={styles.servicePrice}>{service.price}</div>
                  </div>
                  <div className={styles.serviceAction}>
                    <Button size="lg" variant="primary" style={{ padding: '24px 64px', fontSize: '18px', borderRadius: '14px' }}>Book Session</Button>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>


        <section className={styles.statsSection}>
          <div className={styles.container}>
            <Reveal width="100%">
              <div style={{ textAlign: 'center', marginBottom: '80px' }}>
                <h2 className={styles.title}>Technical Laboratory Standards</h2>
                <p className={styles.description}>Every project is processed through our high-fidelity laboratory pipeline.</p>
              </div>
              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>110dB+</span>
                  <span className={styles.statLabel}>Signal-to-Noise Ratio</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Analog Signal Path</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>192kHz</span>
                  <span className={styles.statLabel}>Sampling Fidelity</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statNumber}>Sub-Zero</span>
                  <span className={styles.statLabel}>Processing Latency</span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>


        <section className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <video autoPlay loop muted playsInline>
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlay} />
          </div>
          <div className={styles.videoContent}>
            <Reveal width="100%">
              <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                <h2 className={styles.title} style={{ color: '#fff', fontSize: 'clamp(32px, 5vw, 64px)' }}>The 4EPUHA Workflow</h2>
                <p className={styles.description} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '20px' }}>A surgical approach to sound engineering.</p>
              </div>
              <div className={styles.stepsGrid}>
                {steps.map((step, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className={styles.stepCard}>
                      <div className={styles.stepNumber}>
                        <span style={{ opacity: 0.5 }}>STEP</span>
                        <span style={{ fontSize: '24px' }}>{step.num}</span>
                      </div>
                      <h3 className={styles.stepTitle}>{step.title}</h3>
                      <p className={styles.stepDesc}>{step.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>


        <section className={styles.faqSection}>
          <div className={styles.container}>
            <Reveal width="100%">
              <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                <h2 className={styles.title}>Common Inquiries</h2>
                <p className={styles.description} style={{ maxWidth: '600px', margin: '0 auto' }}>Transparent answers for serious collaborators.</p>
              </div>
              <div className={styles.faqList}>
                {faq.map((item, index) => (
                  <Reveal key={index} delay={index * 0.05}>
                    <div className={styles.faqItem}>
                      <div className={styles.faqQuestion}>
                        <span style={{ color: 'var(--accent)', marginRight: '16px' }}>Q.</span> {item.q}
                      </div>
                      <div className={styles.faqAnswer}>
                        {item.a}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>


        <section className={styles.ctaSection}>
          <div className={styles.container}>
            <Reveal width="100%">
              <div className={styles.ctaCard}>
                <h2 className={`${styles.title} ${styles.ctaTitle}`}>Commence Your <br /> Artifact.</h2>
                <p className={styles.ctaDesc}>
                  Our laboratory calendar is limited. Secure your session today to start your custom sonic project.
                </p>
                <div className={styles.ctaButtons}>
                  <Button size="lg" style={{ padding: '24px 64px', fontSize: '18px', borderRadius: '14px' }}>Request Consultation</Button>
                  <Button size="lg" variant="outline" style={{ padding: '24px 64px', fontSize: '18px', borderRadius: '14px' }}>Browse Laboratory</Button>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
