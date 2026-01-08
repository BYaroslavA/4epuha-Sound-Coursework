import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { ReactLenis } from 'lenis/react';
import { AppRouter } from './providers/router';
import { CartProvider } from '@/entities/cart';
import { AuthProvider } from '@/entities/session';
import { ScrollToTop } from '@/features/scroll-to-top';
import { Preloader } from '@/shared/ui/Preloader';
import './styles/index.css';

export function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ReactLenis root>
      <CartProvider>
        <AuthProvider>
          <AnimatePresence mode="wait">
            {isLoading && <Preloader key="preloader" />}
          </AnimatePresence>
          
          <div className="app">
            <AppRouter />
            <ScrollToTop />
          </div>
        </AuthProvider>
      </CartProvider>
    </ReactLenis>
  );
}
