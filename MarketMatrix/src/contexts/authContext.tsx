import React, {createContext, useContext, useState} from 'react';

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  authenticate: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);

  const authenticate = (token: string) => {
    setAuthToken(token);
  };

  const logout = () => {
    setAuthToken(null);
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
