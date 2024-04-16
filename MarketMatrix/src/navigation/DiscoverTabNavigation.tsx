/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {Dimensions} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OverviewScreen from '../screens/DiscoverScreens/OverviewScreen';
import StocksScreen from '../screens/DiscoverScreens/StocksScreen';
import CryptoScreen from '../screens/DiscoverScreens/CryptoScreen';
import IndicesScreen from '../screens/DiscoverScreens/IndicesScreen';
import {Colors} from '../constants/Colors';
import {NavigationIcon} from '../components/UI/NavigationIcon';

const Tab = createMaterialTopTabNavigator();

const DiscoverTabNavigation = () => {
  const deviceWidth = Dimensions.get('window').width;
  return (
    <Tab.Navigator
      backBehavior="history"
      screenOptions={{
        animationEnabled: false,
        tabBarItemStyle: {
          width: deviceWidth / 4,
          paddingHorizontal: 0,
        },
        tabBarActiveTintColor: Colors.background800,
        tabBarInactiveTintColor: Colors.text500,
        tabBarStyle: {
          backgroundColor: Colors.background500,
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
