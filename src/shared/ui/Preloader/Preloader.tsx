import { useEffect, useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import styles from './Preloader.module.css';

export const Preloader = () => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('LOADING CORE SAMPLES');

  const visualizerBars = useMemo(() => Array.from({ length: 12 }, (_, i) => i), []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    const statusTimer = setInterval(() => {
      const statuses = [
        'LOADING CORE SAMPLES',
        'WARMING ANALOG TUBES',
        'SYNCING BPM ENGINE',
        'MODULATING OSCILLATORS',
        'MASTERING OUTPUT',
        'READY'
      ];
      setStatus(prev => {
        const index = statuses.indexOf(prev);
        return statuses[Math.min(index + 1, statuses.length - 1)];
      });
    }, 400);

    return () => {
      clearInterval(timer);
      clearInterval(statusTimer);
    };
  }, []);

  return (
    <motion.div 
      className={styles.preloader}
      exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.19, 1, 0.22, 1] } }}
    >
      <div className={styles.content}>
        <div className={styles.visualizer}>
          {visualizerBars.map((i) => (
            <motion.div
              key={i}
              className={styles.bar}
              animate={{
                height: [
                  '20%', 
                  `${Math.random() * 80 + 20}%`, 
                  `${Math.random() * 80 + 20}%`, 
                  '20%'
                ]
              }}
              transition={{
                duration: 0.5 + Math.random() * 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>

        <div className={styles.logoContainer}>
          <motion.div 
            className={styles.vinyl}
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <div className={styles.grooves} />
            <div className={styles.centerLabel} />
          </motion.div>
          
          <div className={styles.logoWrapper}>
            <motion.img 
              src="/assets/logo.png" 
              alt="4EPUHA" 
              className={styles.logo}
              animate={{ 
                scale: [1, 1.05, 1],
                opacity: [1, 0.8, 1],
              }}
              transition={{ 
                duration: 0.47, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            <div className={styles.glitchOverlay} />
          </div>
        </div>

        <div className={styles.info}>
          <div className={styles.statusLine}>
            <span className={styles.label}>TRACK:</span>
            <span className={styles.value}>{status}</span>
          </div>
          
          <div className={styles.progressSection}>
            <div className={styles.progressBar}>
              <motion.div 
                className={styles.progressFill}
                style={{ width: `${progress}%` }}
              />
            </div>
            <span className={styles.percentage}>{progress}%</span>
          </div>

          <div className={styles.audioMeta}>
            <div className={styles.metaRow}>
              <span>128.00 BPM</span>
              <span>44.1 kHz / 24-BIT</span>
            </div>
            <div className={styles.metaRow}>
              <span>STEREO_WIDTH: 100%</span>
              <span>L/R_SYNC: OK</span>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.noise} />
      <div className={styles.scanline} />
    </motion.div>
  );
};
