import { ReactLenis } from 'lenis/react';
import { AppRouter } from './providers/router';
import { CartProvider } from '@/entities/cart';
import { AuthProvider } from '@/entities/session';
import { ScrollToTop } from '@/features/scroll-to-top';
import './styles/index.css';

export function App() {
  return (
    <ReactLenis root>
      <CartProvider>
        <AuthProvider>
          <div className="app">
            <AppRouter />
            <ScrollToTop />
          </div>
        </AuthProvider>
      </CartProvider>
    </ReactLenis>
  );
}
