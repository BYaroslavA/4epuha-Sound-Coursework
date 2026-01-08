import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage } from '@/pages/home';
import { ProductsPage } from '@/pages/products';
import { ProductPage } from '@/pages/product';
import { CartPage } from '@/pages/cart';
import { CheckoutPage } from '@/pages/checkout';
import { NewsPage } from '@/pages/news';
import { AboutPage } from '@/pages/about';
import { ServicesPage } from '@/pages/services';
import { LoginPage } from '@/pages/login';
import { RegisterPage } from '@/pages/register';
import { ProfilePage } from '@/pages/profile';
import { NotFoundPage } from '@/pages/not-found';
import { Header } from '@/widgets/header';
import { Footer } from '@/widgets/footer';
import { ScrollToTopOnNavigate } from '@/features/scroll-to-top';

export function AppRouter() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigate />
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
