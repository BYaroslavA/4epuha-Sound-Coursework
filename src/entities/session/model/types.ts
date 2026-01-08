export type User = {
  id: string;
  email: string;
  name: string;
  phone?: string;
  dateOfBirth?: string;
  password?: string;
};

export type AuthState = {
  user: User | null;
  isAuthenticated: boolean;
  isInitialized: boolean;
};

export type AuthContextValue = {
  state: AuthState;
  login: (email: string, password: string) => Promise<void>;
  register: (name: string, email: string, password: string) => Promise<void>;
  updateProfile: (data: Partial<User>) => Promise<void>;
  logout: () => void;
};
