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
import {ThemeProvider} from './contexts/themeContext';

function App(): React.JSX.Element {
  const MyTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.background800,
      text: 'white',
    },
    font: {
      fontFamily: 'Roboto-Italic',
    },
  };
  return (
    <NavigationContainer theme={MyTheme}>
      <StockProvider>
        <ThemeProvider>
          <SearchProvider>
            <AuthContextProvider>
              <MainNavigation />
            </AuthContextProvider>
          </SearchProvider>
        </ThemeProvider>
      </StockProvider>
    </NavigationContainer>
  );
}

export default App;
