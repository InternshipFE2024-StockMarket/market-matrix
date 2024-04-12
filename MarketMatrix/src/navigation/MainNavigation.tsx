import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import {StyleSheet} from 'react-native';
import {Colors} from '../constants/Colors';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.navigationBackground,
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: Colors.selectedIcon,
        tabBarInactiveTintColor: Colors.text500,
      }}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Portfolio" component={PortfolioScreen} />
      <Tab.Screen name="Discover" component={DiscoverScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;

const styles = StyleSheet.create({
  bottomNavigation: {
    backgroundColor: Colors.navigationBackground,
  },
});
