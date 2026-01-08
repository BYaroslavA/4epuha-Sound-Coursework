import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/entities/cart';
import { Button } from '@/shared/ui/Button';
import styles from './CheckoutPage.module.css';

export function CheckoutPage() {
  const { state, clearCart } = useCart();
  const cart = state.items; 
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    setTimeout(() => {
      setIsLoading(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  if (isSuccess) {
    return (
      <main className={styles.successPage}>
        <div className={styles.successContent}>
          <div className={styles.checkCircle}>
            <span className={styles.checkIcon}>✓</span>
          </div>
          <h1 className={styles.successTitle}>Order Placed!</h1>
          <p className={styles.successText}>
            Thank you for your purchase. We have sent a confirmation to your email.
            Our managers will contact you shortly.
          </p>
          <Link to="/">
            <Button>Back to Store</Button>
          </Link>
        </div>
      </main>
    );
  }

  if (cart.length === 0) {
     return (
       <main className={styles.emptyPage}>
         <h1>Your cart is empty</h1>
         <Link to="/products">
           <Button>Start Shopping</Button>
         </Link>
       </main>
     );
  }

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Checkout</h1>

      <div className={styles.grid}>
        <div className={styles.formColumn}>
          <form id="checkout-form" onSubmit={handlePlaceOrder} className={styles.form}>
            
            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>1. Contacts</h2>
              <div className={styles.inputsGrid}>
                <Input label="Name" placeholder="Name Surname" required />
                <Input label="Phone" placeholder="+380 (XX) XXX-XX-XX" required />
                <Input label="Email" type="email" placeholder="example@example.com" required />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>2. Delivery</h2>
              <div className={styles.inputsGrid}>
                <Input label="City" placeholder="Kyiv" required />
                <Input label="Address" placeholder="Khreshchatyk St, 1, apt. 5" required wide />
                <Input label="Courier Comment" placeholder="Intercom code..." wide />
              </div>
            </section>

            <section className={styles.section}>
              <h2 className={styles.sectionTitle}>3. Payment</h2>
              <div className={styles.paymentMethods}>
                <div className={styles.paymentMethodActive}>Card Online</div>
                <div className={styles.paymentMethod}>On Receipt</div>
              </div>
            </section>

          </form>
        </div>

        <div className={styles.summaryColumn}>
          <div className={styles.summaryCard}>
            <h3 className={styles.summaryTitle}>Your Order</h3>
            
            <div className={styles.itemsList}>
              {cart.map((item) => (
                <div key={item.product.id} className={styles.summaryItem}>
                  <div className={styles.itemImage}>
                    <img src={item.product.image} alt={item.product.title} />
                  </div>
                  <div className={styles.itemInfo}>
                    <div className={styles.itemTitle}>{item.product.title}</div>
                    <div className={styles.itemMeta}>
                      {item.quantity} x {item.product.price} ₴
                    </div>
                  </div>
                  <div className={styles.itemTotal}>
                    {item.product.price * item.quantity} ₴
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.divider} />

            <div className={styles.row}>
              <span>Items ({cart.length})</span>
              <span>{total} ₴</span>
            </div>
            <div className={styles.row}>
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div className={styles.divider} />

            <div className={styles.totalRow}>
              <span>Total</span>
              <span>{total} ₴</span>
            </div>

            <button 
              type="submit" 
              form="checkout-form"
              className={styles.payButton}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Pay Now'}
            </button>
            
            <p className={styles.secureText}>🔒 Secure payment and data protection</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Input({ label, placeholder, type = "text", required = false, wide = false }: any) {
  return (
    <div className={`${styles.inputGroup} ${wide ? styles.inputWide : ''}`}>
      <label className={styles.label}>
        {label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
      </label>
      <input 
        className={styles.input} 
        type={type} 
        placeholder={placeholder} 
        required={required}
      />
    </div>
  );
}
