import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OverviewScreen from '../screens/DiscoverScreens/OverviewScreen';
import StocksScreen from '../screens/DiscoverScreens/StocksScreen';
import CryptoScreen from '../screens/DiscoverScreens/CryptoScreen';
import IndicesScreen from '../screens/DiscoverScreens/IndicesScreen';

const Tab = createMaterialTopTabNavigator();

const DiscoverTabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Stocks" component={StocksScreen} />
      <Tab.Screen name="Crypto" component={CryptoScreen} />
      <Tab.Screen name="Indices" component={IndicesScreen} />
    </Tab.Navigator>
  );
};

export default DiscoverTabNavigation;
