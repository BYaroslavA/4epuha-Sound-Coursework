import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useCart, selectCartCount } from '@/entities/cart';
import { useAuth } from '@/entities/session';
import styles from './Header.module.css';

import { products } from '@/entities/product/model/mock';

export function Header() {
  const { state: cartState } = useCart();
  const count = selectCartCount(cartState);
  const { state, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  useEffect(() => {
    setSearchQuery('');
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(`.${styles.search}`)) {
        setSearchQuery('');
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const filteredProducts = searchQuery.length > 0 
    ? products.filter(p => p.title.toLowerCase().includes(searchQuery.toLowerCase()))
    : [];

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About us', path: '/about' },
    { title: 'Services', path: '/services' },
    { title: 'News', path: '/news' },
    { title: 'Store', path: '/products' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.logo}>
          <img src="/assets/logo.png" alt="4EPUHA" className={styles.logoImage} />
          <span className={`${styles.logoText} ${styles.mobileLogoText}`}>4EPUHA SOUND</span>
        </Link>

        <nav className={styles.nav}>
          {navLinks.map((link) => (
            <Link 
              key={link.path} 
              to={link.path} 
              className={`${styles.navLink} ${location.pathname === link.path || (link.path === '/about' && location.pathname.includes('about')) ? styles.navLinkActive : ''}`}
            >
              {link.title}
            </Link>
          ))}
        </nav>

        <div className={styles.actions}>
          <div className={styles.search}>
            <input 
              type="text" 
              placeholder="Search..." 
              className={styles.searchInput} 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery.length > 0 ? (
              <button 
                className={styles.clearButton} 
                onClick={() => setSearchQuery('')}
                title="Clear search"
              >
                ×
              </button>
            ) : (
              <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            )}

            {searchQuery.length > 0 && (
              <div className={styles.searchResults} data-lenis-prevent>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map(product => (
                    <Link key={product.id} to={`/products/${product.id}`} className={styles.searchResultItem}>
                      <img src={product.image} alt={product.title} className={styles.searchResultImage} />
                      <div className={styles.searchResultInfo}>
                        <span className={styles.searchResultTitle}>{product.title}</span>
                        <span className={styles.searchResultPrice}>{product.price} UAH</span>
                      </div>
                    </Link>
                  ))
                ) : (
                  <div className={styles.noResults}>No products found</div>
                )}
              </div>
            )}
          </div>

          {state.isAuthenticated ? (
            <div className={styles.auth}>
              <Link to="/profile" className={styles.profileLink}>
                <span className={styles.userName}>{state.user?.name.split(' ')[0]}</span>
              </Link>
              <button onClick={logout} className={styles.logoutBtn} title="Sign Out">
                <svg className={styles.authIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" y1="12" x2="9" y2="12"></line>
                </svg>
              </button>
            </div>
          ) : (
            <Link to="/login" className={styles.authLink} title="Sign In">
              <svg className={styles.authIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </Link>
          )}

          <Link to="/cart" className={styles.cart}>
            <svg className={styles.cartIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
            {count > 0 && <span className={styles.cartCount}>{count}</span>}
          </Link>

          <button className={styles.burgerButton} onClick={toggleMenu} aria-label="Toggle Menu">
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
            <div className={styles.burgerLine} />
          </button>
        </div>
      </div>

      {createPortal(
        <>
          <div 
            className={`${styles.backdrop} ${isMenuOpen ? styles.backdropOpen : ''}`}
            onClick={toggleMenu}
          />
          
          <div className={`${styles.drawer} ${isMenuOpen ? styles.drawerOpen : ''}`}>
            <div className={styles.drawerHeader}>
              <span className="mobile-nav-title" style={{ color: '#fff', fontSize: '18px', fontWeight: 700 }}>Menu</span>
              <button onClick={toggleMenu} className={styles.closeBtn}>×</button>
            </div>
            
            <div className={styles.linksContainer}>
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path} className={styles.mobileNavLink} onClick={toggleMenu}>
                  {link.title}
                </Link>
              ))}
              <Link to="/cart" className={styles.mobileNavLink} onClick={toggleMenu}>
                Cart {count > 0 && <span>({count})</span>}
              </Link>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}
