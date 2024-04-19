import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthUser} from '../constants/Interfaces';

interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  userId: string;
  userName: string;
  authenticate: (userData: AuthUser) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  token: '',
  isAuthenticated: false,
  userId: '',
  userName: '',
  authenticate: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

interface AuthContextProviderProps {
  children: React.ReactNode;
}

const AuthContextProvider = ({children}: AuthContextProviderProps) => {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  const loadUserFromStorage = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('userdata');
      if (userDataString !== null) {
        const userData = JSON.parse(userDataString);

        setAuthToken(userData.token);
        setUserEmail(userData.email);
        setUserName(userData.name);
      }
    } catch (error) {
      console.error('Error loading token from AsyncStorage:', error);
    }
  };

  const saveUserToStorage = async (
    token: string,
    email: string,
    name: string,
  ) => {
    try {
      const userData = {token, email, name};
      console.log('set', {userData});

      await AsyncStorage.setItem('userdata', JSON.stringify(userData));
    } catch (error) {
      console.error('Error saving token to AsyncStorage:', error);
    }
  };

  const removeUserFromStorage = async () => {
    try {
      await AsyncStorage.removeItem('authToken');
    } catch (error) {
      console.error('Error removing token from AsyncStorage:', error);
    }
  };

  const authenticate = (userData: AuthUser) => {
    setAuthToken(userData.idToken);
    saveUserToStorage(userData.idToken, userData.email, userData.name);
    setUserName(userData.name);
  };

  useEffect(() => {
    loadUserFromStorage();
  }, []);

  const logout = () => {
    setAuthToken(null);
    removeUserFromStorage();
  };

  const value = {
    token: authToken,
    isAuthenticated: !!authToken,
    userId: userEmail,
    userName: userName,
    authenticate: authenticate,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
