import { useState, useEffect, type FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/entities/session';
import { Button } from '@/shared/ui/Button';
import { PageTransition } from '@/shared/ui/PageTransition';
import { Reveal } from '@/shared/ui/Reveal';
import styles from './ProfilePage.module.css';

export function ProfilePage() {
  const navigate = useNavigate();
  const { state, updateProfile } = useAuth();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!state.isInitialized) return;

    if (!state.user && !state.isAuthenticated) {
      navigate('/login');
      return;
    }
    if (state.user) {
      setName(state.user.name);
      setEmail(state.user.email);
      setPhone(state.user.phone || '');
      setDateOfBirth(state.user.dateOfBirth || '');
    }
  }, [state.user, state.isAuthenticated, state.isInitialized, navigate]);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setLoading(true);

    try {
      await updateProfile({
        name,
        phone,
        dateOfBirth
      });
      setMessage({ type: 'success', text: 'Profile updated successfully' });
    } catch (err) {
      setMessage({ type: 'error', text: err instanceof Error ? err.message : 'Failed to update profile' });
    } finally {
      setLoading(false);
    }
  };

  if (!state.user) return null;

  return (
    <PageTransition>
      <main className={styles.page}>
        <div className={styles.container}>
          <Reveal>
            <div className={styles.header}>
              <h1 className={styles.title}>My Profile</h1>
              <p className={styles.subtitle}>Manage your personal information</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className={styles.card}>
              <h2 className={styles.sectionTitle}>Personal Information</h2>
              
              <form onSubmit={handleSubmit} className={styles.form}>
                {message && (
                  <div className={`${styles.message} ${styles[message.type]}`}>
                    {message.text}
                  </div>
                )}

                <div className={styles.grid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Full Name</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className={styles.input}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email</label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      disabled
                      className={styles.input}
                      style={{ opacity: 0.7, cursor: 'not-allowed' }}
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={styles.input}
                      placeholder="+380..."
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="dob" className={styles.label}>Date of Birth</label>
                    <input
                      type="date"
                      id="dob"
                      value={dateOfBirth}
                      onChange={(e) => setDateOfBirth(e.target.value)}
                      className={styles.input}
                    />
                  </div>
                </div>

                <div className={styles.actions}>
                  <Button type="submit" size="lg" disabled={loading}>
                    {loading ? 'Saving...' : 'Save Changes'}
                  </Button>
                </div>
              </form>
            </div>
          </Reveal>
        </div>
      </main>
    </PageTransition>
  );
}
