import React from 'react';
import {useAuth} from '../contexts/authContext';
import AuthStack from './AuthStack';
import AuthenticatedStack from './AuthenticatedStack';

const MainNavigation = () => {
  // const {isAuthenticated} = useAuth();
  // if (isAuthenticated) {
  return <AuthenticatedStack />;
  // } else if (!isAuthenticated) {
  //   return <AuthStack />;
  // }
};

export default MainNavigation;
