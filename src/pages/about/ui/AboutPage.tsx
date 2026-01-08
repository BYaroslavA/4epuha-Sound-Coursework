import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';

import { PageTransition } from '@/shared/ui/PageTransition';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './AboutPage.module.css';

export function AboutPage() {
  const stats = [
    { number: '15+', label: 'Years of Experience' },
    { number: '250+', label: 'Custom Projects' },
    { number: '12k', label: 'Discord Members' },
    { number: '48', label: 'Analog Grails' },
  ];

  const values = [
    {
      icon: '◈',
      title: 'Sonic Authenticity',
      text: 'We never simulate when we can synthesize. Every ghost in the machine is intentional. Our heritage is rooted in the physical world, where electrons flow through real copper and vacuum tubes. We believe that the unique imperfections of analog circuits are what provide the soul and character that modern digital production often lacks.'
    },
    {
      icon: '◬',
      title: 'Artist Autonomy',
      text: 'Our tools are open-ended frameworks, not restrictive presets. You are the pilot of your own sonic journey. We provide the raw power; you provide the vision that turns it into art. Our development philosophy is centered around creating interfaces that feel like instruments, allowing for happy accidents and deep creative exploration.'
    },
    {
      icon: '◎',
      title: 'Precision Build',
      text: 'Military-grade PCB routing meets boutique component selection for infinite reliability. We believe that your gear should outlive you, becoming an heirloom of your creative output. Every unit we produce undergoes rigorous testing in our laboratory to ensure it meets the highest standards of performance.'
    },
    {
      icon: '∿',
      title: 'Immersion First',
      text: 'From the tactile response of a fader to the UI flow, we design for the state of trance. When you are in the flow state, the equipment should disappear, leaving nothing between you and the sound. We meticulously study ergonomics and psychoacoustics to create tools that feel like a natural extension of your mind.'
    }
  ];

  const team = [
    {
      name: 'Leo Sound',
      role: 'Founder & Lead Designer',
      image: '/team/team-1.jpg',
      bio: 'A veteran with over two decades of experience. Leo oversees every circuit design, ensuring that even our digital tools possess the "breath" of analog hardware.'
    },
    {
      name: 'Elena Synth',
      role: 'Hardware Engineer',
      image: '/team/team-2.jpg',
      bio: 'Elena is the architect behind our modular components. Her expertise in vintage circuit restoration informs our move into hybrid synthesis.'
    },
    {
      name: 'Marc Rhythm',
      role: 'Creative Director',
      image: '/team/team-3.jpg',
      bio: 'As an active producer, Marc bridges the gap between engineering and performance. He works closely with our community to refine our tools.'
    },
    {
      name: 'Alex Beat',
      role: 'Head of Acoustics',
      image: '/team/team-4.jpg',
      bio: 'Ensuring every frequency is accounted for. Alex manages our testing facility and oversees the acoustic precision of our hardware cases.'
    }
  ];

  const gear = [
    {
      name: 'SSL 4000 G+',
      type: 'Console',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Fairchild 670',
      type: 'Compression',
      image: 'https://images.unsplash.com/photo-1520529123447-4a620140417b?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Neumann U47',
      type: 'Legacy Mic',
      image: 'https://images.unsplash.com/photo-1551712702-4b7335dd8706?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Moog Model D',
      type: 'Analog Core',
      image: 'https://images.unsplash.com/photo-1550291652-6ea9114a47b1?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Lexicon 480L',
      type: 'Temporal Space',
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1200&auto=format&fit=crop'
    },
    {
      name: 'Jupiter 8',
      type: 'Poly-Synth',
      image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=1200&auto=format&fit=crop'
    },
  ];

  const [activeGear, setActiveGear] = useState(gear[0]);

  return (
    <PageTransition>
      <main style={{ paddingTop: '0' }}>

        <section className={styles.heroSection}>
          <div className={styles.videoWrapper}>
            <video autoPlay loop muted playsInline poster="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=1600&auto=format&fit=crop">
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
            </video>
            <div className={styles.videoOverlay} />
          </div>
          <div className={styles.videoContent}>
            <Reveal width="100%">
              <div className={styles.breadcrumbs}>
                <span className={styles.breadcrumbItem}>Home</span>
                <span className={styles.breadcrumbSeparator}>/</span>
                <span className={styles.breadcrumbActive}>Our Identity</span>
              </div>
              <h1 className={styles.heroTitle}>
                Pioneering <br />
                <span style={{ color: 'var(--accent)' }}>Sonic Frontiers</span>
              </h1>
              <p className={styles.heroSubtitle}>
                We are a collection of dreamers, engineers, and rebels. At 4EPUHA Sound,
                we don't just innovate—we create artifacts of sound that resonate through time.
                Our mission is to provide creators with the visceral, high-fidelity tools they need to shape the future of music.
                We believe in the power of sound to transform experiences and the importance of craft in an era of mass consumption.
              </p>
              <Button variant="primary" size="lg">Join The Collective</Button>
            </Reveal>
          </div>
        </section>

        <section style={{ padding: '40px 0' }}>
          <div className={styles.sectionContainer}>
            <Reveal width="100%">
              <div className={styles.statsGrid}>
                {stats.map((stat, i) => (
                  <div key={i} className={styles.statItem}>
                    <span className={styles.statNumber}>{stat.number}</span>
                    <span className={styles.statLabel}>{stat.label}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>


        <section style={{ padding: '100px 0' }}>
          <div className={styles.sectionContainer}>
            <Reveal width="100%">
              <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                <h2 className={styles.sectionTitle}>The 4EPUHA Ideology</h2>
                <p className={styles.sectionDescription} style={{ maxWidth: '850px', margin: '0 auto', fontSize: '22px' }}>
                  Our approach is defined by four core principles that guide every circuit we route
                  and every line of code we write. We don't settle for "good enough"—we strive for sonic perfection
                  that feels alive in your hands and responds to your every creative instinct.
                </p>
              </div>
              <div className={styles.coreValuesGrid}>
                {values.map((v, i) => (
                  <div key={i} className={styles.valueCard}>
                    <span className={styles.valueIcon}>{v.icon}</span>
                    <h3 className={styles.valueTitle}>{v.title}</h3>
                    <p className={styles.valueText}>{v.text}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>


        <section style={{ padding: '140px 0', background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden' }}>
          <div className={styles.sectionContainer}>
            <Reveal width="100%">
              <div className={styles.splitLayout}>
                <div className="about-content">
                  <span style={{ color: 'var(--accent)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '14px', marginBottom: '20px', display: 'block' }}>
                    The Infrastructure
                  </span>
                  <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(32px, 5vw, 56px)', marginBottom: '32px' }}>The Experimental <br /> Sound Forge</h2>
                  <p className={styles.sectionDescription} style={{ marginBottom: '48px', maxWidth: '600px' }}>
                    Our HQ is a hybrid laboratory where digital synthesis
                    and analog circuitry collide. We maintain an archive of legendary
                    hardware that serves as our baseline for authenticity. Each piece of 4EPUHA gear
                    is benchmarked against these giants to ensure it possesses the same harmonic depth
                    and character that defined generations of music. We obsess over the nuance of signal paths
                    to ensure your recordings have the weight they deserve.
                  </p>
                  <div className={styles.forgeList}>
                    {gear.map((g, i) => (
                      <div
                        key={i}
                        className={`${styles.forgeItem} ${activeGear.name === g.name ? styles.forgeItemActive : ''}`}
                        onMouseEnter={() => setActiveGear(g)}
                      >
                        <span className={`${styles.forgeName} ${activeGear.name === g.name ? styles.forgeNameActive : ''}`}>{g.name}</span>
                        <span className={styles.forgeTag}>{g.type}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={styles.aboutHeroImage} style={{ height: '700px', position: 'relative', background: '#000' }}>
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeGear.image}
                      src={activeGear.image}
                      alt={activeGear.name}
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        position: 'absolute',
                        inset: 0
                      }}
                    />
                  </AnimatePresence>
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.4), transparent)', pointerEvents: 'none' }} />
                </div>
              </div>
            </Reveal>
          </div>
        </section>


        <section style={{ padding: '160px 0' }}>
          <div className={styles.sectionContainer}>
            <Reveal width="100%">
              <div style={{ textAlign: 'center', marginBottom: '100px' }}>
                <h2 className={styles.sectionTitle}>The Visionaries</h2>
                <p className={styles.sectionDescription} style={{ maxWidth: '800px', margin: '0 auto', fontSize: '22px' }}>
                  Meet the architects, dreamers, and engineers behind the 4EPUHA wall of sound.
                  A collective defined by obsession and a shared pursuit of sonic excellence. We come from different
                  backgrounds—classical composition, electrical engineering, and underground electronic music—but
                  we are united by a single goal: to build the instruments of the future.
                </p>
              </div>
              <div className={styles.teamGrid}>
                {team.map((member, index) => (
                  <Reveal key={index} delay={index * 0.1} width="100%">
                    <div className={styles.teamCard}>
                      <div className={styles.teamImage}>
                        <img src={member.image} alt={member.name} />
                      </div>
                      <div className={styles.teamInfo}>
                        <span className={styles.teamRole}>{member.role}</span>
                        <h3 className={styles.teamName}>{member.name}</h3>
                        <p className={styles.sectionDescription} style={{ fontSize: '16px', lineHeight: 1.6, marginBottom: 0 }}>{member.bio}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>
          </div>
        </section>


        <section className={styles.aboutCta}>
          <div className={styles.sectionContainer}>
            <Reveal width="100%">
              <h2 className={styles.sectionTitle} style={{ fontSize: 'clamp(40px, 8vw, 96px)', marginBottom: '40px', letterSpacing: '-0.05em' }}>
                Join The Wave.
              </h2>
              <p className={styles.sectionDescription} style={{ color: 'rgba(255,255,255,0.75)', maxWidth: '700px', margin: '0 auto 60px', fontSize: '24px', lineHeight: '1.5' }}>
                Be the first to experience our next sonic artifact. Join our collective and help us shape the future of sound.
                Our community is where ideas are shared and the future is built.
              </p>
              <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
                <Link to="/products">
                  <Button variant="primary" size="lg" style={{ padding: '24px 64px', fontSize: '18px', borderRadius: '14px' }}>Explore Artifacts</Button>
                </Link>
                <Link to="/contact">
                  <Button variant="outline" size="lg" style={{ padding: '24px 64px', fontSize: '18px', borderRadius: '14px' }}>Build Something</Button>
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </PageTransition>
  );
}
