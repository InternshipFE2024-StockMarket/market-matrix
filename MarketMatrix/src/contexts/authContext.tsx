import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthUser} from '../constants/Interfaces';

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  userId: string | null;
  authenticate: (userData: AuthUser) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  userId: null,
  authenticate: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  const loadTokenFromStorage = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userdata');
      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);
        setAuthToken(userData.token);
        setUserEmail(userData.email);
        console.log({userData});
      }
    } catch (error) {
      console.error('Error loading token from AsyncStorage:', error);
    }
  };

  const saveTokenToStorage = async (token: string, email: string) => {
    try {
      const userData = {token, email};
      await AsyncStorage.setItem('userdata', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving token to AsyncStorage:', error);
    }
  };

  const removeTokenFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
    } catch (error) {
      console.error('Error removing token from AsyncStorage:', error);
    }
  };

  const authenticate = (userData: AuthUser) => {
    setAuthToken(userData.idToken);
    saveTokenToStorage(userData.idToken, userData.email);
  };

  useEffect(() => {
    loadTokenFromStorage();
  }, []);

  const logout = () => {
    setAuthToken(null);
    removeTokenFromStorage();
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    userId: userEmail,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
