import { useNavigate } from 'react-router-dom';
import { Button } from '@/shared/ui/Button';
import styles from './AuthModal.module.css';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleAction = (path: string) => {
    onClose();
    navigate(path);
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.glow} />
        
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        
        <div className={styles.content}>
          <div className={styles.icon}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          
          <h2 className={styles.title}>Account Required</h2>
          <p className={styles.description}>
            Please sign in or create an account to proceed with your order and track your purchase.
          </p>
          
          <div className={styles.actions}>
            <Button 
              className={styles.loginButton} 
              onClick={() => handleAction('/login')}
            >
              Sign In
            </Button>
            <Button 
              variant="outline" 
              className={styles.registerButton}
              onClick={() => handleAction('/register')}
            >
              Create Account
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
