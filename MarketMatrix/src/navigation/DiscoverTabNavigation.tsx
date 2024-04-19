/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OverviewScreen from '../screens/DiscoverScreens/OverviewScreen';
import StocksScreen from '../screens/DiscoverScreens/StocksScreen';
import CryptoScreen from '../screens/DiscoverScreens/CryptoScreen';
import IndicesScreen from '../screens/DiscoverScreens/IndicesScreen';
import {NavigationIcon} from '../components/UI/NavigationIcon';
import {useThemeContext} from '../contexts/themeContext';

const Tab = createMaterialTopTabNavigator();

const DiscoverTabNavigation = () => {
  const {width} = useWindowDimensions();

  const {theme} = useThemeContext();

  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        animationEnabled: false,
        tabBarItemStyle: {
          width: width / 4,
          paddingHorizontal: 0,
        },
        tabBarActiveTintColor: theme.background800,
        tabBarInactiveTintColor: theme.text500,
        tabBarStyle: {
          backgroundColor: theme.background500,
        },
        tabBarLabelStyle: {
          textTransform: 'none',
        },
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
      }}>
      <Tab.Screen
        name="Overview"
        component={OverviewScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/overview.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Stocks"
        component={StocksScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/stocks.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Crypto"
        component={CryptoScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/crypto.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Indices"
        component={IndicesScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/indices.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default DiscoverTabNavigation;
