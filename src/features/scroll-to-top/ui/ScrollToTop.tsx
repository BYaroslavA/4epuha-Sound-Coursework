import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <button onClick={scrollToTop} style={styles.button} aria-label="Scroll to top">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}

const styles = {
  button: {
    position: 'fixed' as const,
    bottom: '40px',
    right: '40px',
    width: '48px',
    height: '48px',
    borderRadius: '0px',
    background: 'var(--accent)',
    color: '#000',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 999,
    boxShadow: '8px 8px 0px var(--accent-glow)',
    transition: 'all 0.2s var(--ease-expo)',
  },
};
