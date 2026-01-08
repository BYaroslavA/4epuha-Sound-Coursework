import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.column}>
          <Link to="/" className={styles.logo}>4EPUHA SOUND</Link>
          <p className={styles.text}>
            PREMIUM SONIC ARTIFACTS FOR THE POST-DIGITAL ARCHITECT. 
            ENGINEERED IN THE LABORATORY, PROVEN IN THE RAVE.
          </p>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>NAVIGATION</h4>
          <div className={styles.links}>
            <Link to="/products" className={styles.link}>CATALOG</Link>
            <Link to="/news" className={styles.link}>NEWS</Link>
            <Link to="/cart" className={styles.link}>CART</Link>
            <Link to="/about" className={styles.link}>ABOUT MANIFESTO</Link>
          </div>
        </div>

        <div className={styles.column}>
          <h4 className={styles.heading}>CONTACTS</h4>
          <div className={styles.links}>
            <span className={styles.text}>+380 (67) 123-45-67</span>
            <span className={styles.text}>HELLO@4EPUHA.UA</span>
            <div className={styles.socials}>
              <a href="#" className={styles.social}>TG</a>
              <a href="#" className={styles.social}>INST</a>
              <a href="#" className={styles.social}>YT</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className={styles.bottom}>
        <p className={styles.copyright}>© 2026 4EPUHA SOUND // DEPLOYMENT ACTIVE</p>
        <div className={styles.status}>
          <span className={styles.copyright}>SYSTEM STATUS: OPTIMAL</span>
        </div>
      </div>
    </footer>
  );
}
