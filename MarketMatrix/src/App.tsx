/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import MainNavigation from './navigation/MainNavigation';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {StockProvider} from './contexts/stocksContext';
import {SearchProvider} from './contexts/searchContext';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import AuthContextProvider from './contexts/authContext';

function App(): React.JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background800,
      text: 'white',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
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
