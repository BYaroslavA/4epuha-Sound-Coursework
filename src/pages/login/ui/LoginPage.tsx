import { useState, type FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '@/entities/session';
import { Button } from '@/shared/ui/Button';
import { PageTransition } from '@/shared/ui/PageTransition';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './LoginPage.module.css';

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/products');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTransition>
      <main className={styles.page}>
        <Reveal>
          <div className={styles.formContainer}>
            <h1 className={styles.title}>Welcome Back</h1>
            
            <form onSubmit={handleSubmit} className={styles.form}>
              {error && <div className={styles.error}>{error}</div>}
              
              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="password" className={styles.label}>Password</label>
                <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className={styles.input}
                  required
                />
              </div>

              <Button type="submit" disabled={loading} className={styles.submitBtn}>
                {loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            <div className={styles.footer}>
              Don't have an account?
              <Link to="/register" className={styles.link}>Sign Up</Link>
            </div>
          </div>
        </Reveal>
      </main>
    </PageTransition>
  );
}
