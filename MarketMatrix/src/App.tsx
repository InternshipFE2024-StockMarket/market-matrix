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

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <StockProvider>
        <MainNavigation />
      </StockProvider>
    </NavigationContainer>
  );
}

export default App;
