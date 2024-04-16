/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {NavigationContainer} from '@react-navigation/native';
import {StockProvider} from './contexts/stocksContext';
import {SearchProvider} from './contexts/searchContext';
import AuthContextProvider from './contexts/authContext';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StockProvider>
        <SearchProvider>
          <AuthContextProvider>
            <MainNavigation />
          </AuthContextProvider>
        </SearchProvider>
      </StockProvider>
    </NavigationContainer>
  );
}

export default App;
