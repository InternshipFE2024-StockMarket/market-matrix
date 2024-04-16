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

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StockProvider>
        <SearchProvider>
          <MainNavigation />
        </SearchProvider>
      </StockProvider>
    </NavigationContainer>
  );
}

export default App;
