import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/entities/cart';
import { useAuth } from '@/entities/session';
import { Button } from '@/shared/ui/Button';
import { AuthModal } from '@/shared/ui/AuthModal';
import { QuantityControl } from '@/shared/ui/QuantityControl';
import styles from './CartPage.module.css';

export function CartPage() {
  const navigate = useNavigate();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const { state: authState } = useAuth();
  const { state: cartState, addToCart, removeFromCart, decrementFromCart } = useCart();

  if (cartState.items.length === 0) {
    return (
      <main className={styles.emptyPage}>
        <h1>Your cart is empty</h1>
        <Link to="/products">
          <Button>Back to Catalog</Button>
        </Link>
      </main>
    );
  }

  const totalPrice = cartState.items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleCheckout = () => {
    if (authState.isAuthenticated) {
      navigate('/checkout');
    } else {
      setIsAuthModalOpen(true);
    }
  };

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Your Cart</h1>
      
      <div className={styles.grid}>
        <div className={styles.itemsColumn}>
          {cartState.items.map((item) => (
            <div key={item.product.id} className={styles.itemCard}>
              <img src={item.product.image} alt={item.product.title} className={styles.itemImage} />
              
              <div className={styles.itemInfo}>
                <h3 className={styles.itemTitle}>{item.product.title}</h3>
                {item.size && <p className={styles.itemSize}>Size: {item.size}</p>}
                <p className={styles.itemPrice}>{item.product.price} ₴</p>
              </div>

              <div className={styles.itemActions}>
                <QuantityControl 
                  value={item.quantity}
                  onIncrement={() => addToCart(item.product, item.size)}
                  onDecrement={() => decrementFromCart(item.product.id, item.size)}
                  min={0}
                />
                <button 
                  onClick={() => removeFromCart(item.product.id, item.size)}
                  className={styles.removeButton}
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.summaryWrapper}>
          <div className={styles.summaryCard}>
            <h2 className={styles.summaryTitle}>Total</h2>
            <div className={styles.totalPrice}>{totalPrice} ₴</div>
            <Button onClick={handleCheckout} style={{ width: '100%' }}>
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </main>
  );
}


