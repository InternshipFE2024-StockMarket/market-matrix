import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import DiscoverScreen from '../screens/DiscoverScreen';
import {Colors} from '../constants/Colors';
import {NavigationIcon} from '../components/UI/NavigationIcon';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: Colors.navigationBackground,
          borderTopWidth: 0,
          paddingTop: 10,
        },
        tabBarActiveTintColor: Colors.selectedIcon,
        tabBarInactiveTintColor: Colors.text500,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={28}
              source={require('../assets/icons/icon-home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={28}
              source={require('../assets/icons/icon-chart.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverScreen}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={28}
              source={require('../assets/icons/icon-search.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainNavigation;
