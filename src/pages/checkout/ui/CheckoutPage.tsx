import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/entities/cart';
import { Button } from '@/shared/ui/Button';

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
      <main style={styles.successPage}>
        <div style={styles.successContent}>
          <div style={styles.checkCircle}>
            <span style={styles.checkIcon}>✓</span>
          </div>
          <h1 style={styles.successTitle}>Order Placed!</h1>
          <p style={styles.successText}>
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
       <main style={styles.emptyPage}>
         <h1>Your cart is empty</h1>
         <Link to="/products">
           <Button>Start Shopping</Button>
         </Link>
       </main>
     );
  }

  return (
    <main style={styles.page}>
      <h1 style={styles.title}>Checkout</h1>

      <div style={styles.grid}>
        <div style={styles.formColumn}>
          <form id="checkout-form" onSubmit={handlePlaceOrder} style={styles.form}>
            
            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>1. Contacts</h2>
              <div style={styles.inputsGrid}>
                <Input label="Name" placeholder="Name Surname" required />
                <Input label="Phone" placeholder="+380 (XX) XXX-XX-XX" required />
                <Input label="Email" type="email" placeholder="example@example.com" required />
              </div>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>2. Delivery</h2>
              <div style={styles.inputsGrid}>
                <Input label="City" placeholder="Kyiv" required />
                <Input label="Address" placeholder="Khreshchatyk St, 1, apt. 5" required wide />
                <Input label="Courier Comment" placeholder="Intercom code..." wide />
              </div>
            </section>

            <section style={styles.section}>
              <h2 style={styles.sectionTitle}>3. Payment</h2>
              <div style={styles.paymentMethods}>
                <div style={styles.paymentMethodActive}>Card Online</div>
                <div style={styles.paymentMethod}>On Receipt</div>
              </div>
            </section>

          </form>
        </div>

        <div style={styles.summaryColumn}>
          <div style={styles.summaryCard}>
            <h3 style={styles.summaryTitle}>Your Order</h3>
            
            <div style={styles.itemsList}>
              {cart.map((item) => (
                <div key={item.product.id} style={styles.summaryItem}>
                  <div style={styles.itemImage}>IMAGE</div>
                  <div style={styles.itemInfo}>
                    <div style={styles.itemTitle}>{item.product.title}</div>
                    <div style={styles.itemMeta}>
                      {item.quantity} x {item.product.price} ₴
                    </div>
                  </div>
                  <div style={styles.itemTotal}>
                    {item.product.price * item.quantity} ₴
                  </div>
                </div>
              ))}
            </div>

            <div style={styles.divider} />

            <div style={styles.row}>
              <span>Items ({cart.length})</span>
              <span>{total} ₴</span>
            </div>
            <div style={styles.row}>
              <span>Delivery</span>
              <span>Free</span>
            </div>

            <div style={styles.divider} />

            <div style={styles.totalRow}>
              <span>Total</span>
              <span>{total} ₴</span>
            </div>

            <button 
              type="submit" 
              form="checkout-form"
              style={styles.payButton}
              disabled={isLoading}
            >
              {isLoading ? 'Processing...' : 'Pay Now'}
            </button>
            
            <p style={styles.secureText}>🔒 Secure payment and data protection</p>
          </div>
        </div>
      </div>
    </main>
  );
}

function Input({ label, placeholder, type = "text", required = false, wide = false }: any) {
  return (
    <div style={{ ...styles.inputGroup, ...(wide ? styles.inputWide : {}) }}>
      <label style={styles.label}>
        {label} {required && <span style={{ color: 'var(--accent)' }}>*</span>}
      </label>
      <input 
        style={styles.input} 
        type={type} 
        placeholder={placeholder} 
        required={required}
      />
    </div>
  );
}

const styles = {
  page: {
    padding: '120px 32px 80px',
    maxWidth: '1200px',
    margin: '0 auto',
    minHeight: '100vh',
  },
  emptyPage: {
    padding: '120px 32px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '24px',
    minHeight: '80vh',
  },
  successPage: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--bg)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    animation: 'fadeIn 0.5s ease',
  },
  successContent: {
    textAlign: 'center' as const,
    maxWidth: '500px',
    padding: '40px',
  },
  checkCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#4caf50',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 auto 24px',
    boxShadow: '0 10px 30px rgba(76, 175, 80, 0.3)',
  },
  checkIcon: {
    fontSize: '40px',
  },
  successTitle: {
    fontSize: '32px',
    marginBottom: '16px',
    color: 'var(--text)',
  },
  successText: {
    color: 'var(--text-secondary)',
    marginBottom: '32px',
    lineHeight: 1.6,
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    marginBottom: '48px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '64px',
    alignItems: 'start',
  },
  formColumn: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '48px',
  },
  summaryColumn: {
    position: 'sticky' as const,
    top: '120px',
  },
  section: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  sectionTitle: {
    fontSize: '20px',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    paddingBottom: '16px',
    marginBottom: '8px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '48px',
  },
  inputsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '24px',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '8px',
  },
  inputWide: {
    gridColumn: '1 / -1',
  },
  label: {
    fontSize: '14px',
    color: 'var(--text-secondary)',
    fontWeight: 500,
  },
  input: {
    background: 'var(--bg-secondary)',
    border: '1px solid var(--text-tertiary)',
    borderRadius: 'var(--radius-sm)',
    padding: '12px 16px',
    color: 'var(--text)',
    fontSize: '16px',
    outline: 'none',
    transition: 'border-color 0.2s',
  },
  paymentMethods: {
    display: 'flex',
    gap: '16px',
  },
  paymentMethod: {
    flex: 1,
    padding: '16px',
    border: '1px solid var(--text-tertiary)',
    borderRadius: 'var(--radius-sm)',
    textAlign: 'center' as const,
    cursor: 'pointer',
    opacity: 0.6,
  },
  paymentMethodActive: {
    flex: 1,
    padding: '16px',
    border: '1px solid var(--accent)',
    background: 'rgba(199, 167, 91, 0.1)',
    borderRadius: 'var(--radius-sm)',
    textAlign: 'center' as const,
    color: 'var(--accent)',
    fontWeight: 600,
    cursor: 'pointer',
  },
  summaryCard: {
    background: 'var(--bg-secondary)',
    backdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.05)',
    borderRadius: 'var(--radius-lg)',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '24px',
  },
  summaryTitle: {
    margin: 0,
    fontSize: '20px',
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '16px',
    maxHeight: '300px',
    overflowY: 'auto' as const,
    paddingRight: '8px',
  },
  summaryItem: {
    display: 'flex',
    gap: '12px',
    fontSize: '14px',
  },
  itemImage: {
    width: '48px',
    height: '48px',
    background: '#333',
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '8px',
    color: '#aaa',
  },
  itemInfo: {
    flex: 1,
    overflow: 'hidden',
  },
  itemTitle: {
    whiteSpace: 'nowrap' as const,
    overflow: 'hidden' as const,
    textOverflow: 'ellipsis' as const,
    marginBottom: '4px',
  },
  itemMeta: {
    color: 'var(--text-secondary)',
    fontSize: '12px',
  },
  itemTotal: {
    fontWeight: 500,
  },
  divider: {
    height: '1px',
    background: 'rgba(255,255,255,0.1)',
  },
  row: {
    display: 'flex',
    justifyContent: 'space-between',
    color: 'var(--text-secondary)',
    fontSize: '15px',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '20px',
    fontWeight: 700,
    color: 'var(--accent)',
  },
  payButton: {
    width: '100%',
    padding: '16px',
    background: 'var(--accent)',
    color: '#000',
    border: 'none',
    borderRadius: 'var(--radius-sm)',
    fontSize: '16px',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    marginTop: '8px',
  },
  secureText: {
    fontSize: '12px',
    color: 'var(--text-tertiary)',
    textAlign: 'center' as const,
    margin: 0,
  },
};

const styleTag = document.createElement('style');
styleTag.textContent = `
  @media (max-width: 900px) {
    .checkout-grid {
      grid-template-columns: 1fr !important;
    }
    .summary-column {
      position: static !important;
      order: -1;
    }
  }
`;
document.head.appendChild(styleTag);
