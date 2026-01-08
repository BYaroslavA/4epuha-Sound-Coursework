import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { User, AuthState, AuthContextValue } from './types';

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const USERS_KEY = 'app_users';
const SESSION_KEY = 'app_session';

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isInitialized: false,
  });

  useEffect(() => {
    const savedSession = localStorage.getItem(SESSION_KEY);
    if (savedSession) {
      try {
        const user = JSON.parse(savedSession);
        setState(prev => ({ ...prev, user, isAuthenticated: true }));
      } catch (e) {
        console.error('Failed to parse session', e);
        localStorage.removeItem(SESSION_KEY);
      }
    }
    setState(prev => ({ ...prev, isInitialized: true }));
  }, []);

  const login = async (email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const usersStr = localStorage.getItem(USERS_KEY);
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
      const { password, ...safeUser } = user;
      setState(prev => ({ ...prev, user: safeUser, isAuthenticated: true }));
      localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const register = async (name: string, email: string, password: string) => {
    await new Promise(resolve => setTimeout(resolve, 500));

    const usersStr = localStorage.getItem(USERS_KEY);
    const users: User[] = usersStr ? JSON.parse(usersStr) : [];

    if (users.find(u => u.email === email)) {
      throw new Error('User already exists');
    }

    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      email,
      password,
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const { password: _, ...safeUser } = newUser;
    setState(prev => ({ ...prev, user: safeUser, isAuthenticated: true }));
    localStorage.setItem(SESSION_KEY, JSON.stringify(safeUser));
  };

  const updateProfile = async (data: Partial<User>) => {
    if (!state.user) throw new Error('Not authenticated');
    
    await new Promise(resolve => setTimeout(resolve, 500));

    const usersStr = localStorage.getItem(USERS_KEY);
    let users: User[] = usersStr ? JSON.parse(usersStr) : [];

    users = users.map(u => {
      if (u.id === state.user?.id) {
        return { ...u, ...data };
      }
      return u;
    });

    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const updatedUser = { ...state.user, ...data };
    setState(prev => ({ ...prev, user: updatedUser, isAuthenticated: true }));
    localStorage.setItem(SESSION_KEY, JSON.stringify(updatedUser));
  };

  const logout = () => {
    setState(prev => ({ ...prev, user: null, isAuthenticated: false }));
    localStorage.removeItem(SESSION_KEY);
  };

  return (
    <AuthContext.Provider value={{ state, login, register, updateProfile, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
