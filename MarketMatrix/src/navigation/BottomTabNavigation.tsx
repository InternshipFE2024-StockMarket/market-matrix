/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/self-closing-comp */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import {NavigationIcon} from '../components/UI/NavigationIcon';
import DiscoverTabNavigation from './DiscoverTabNavigation';
import SearchHeader from '../components/DiscoverScreen/SearchHeader';
import React from 'react';
import PortfolioTabNavigation from './PortfolioTabNavigation';
import {useThemeContext} from '../contexts/themeContext';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  const {theme} = useThemeContext();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: theme.navigationBackground,
          borderTopWidth: 0,
          paddingTop: 10,
        },
        tabBarActiveTintColor: theme.selectedIcon,
        tabBarInactiveTintColor: theme.text500,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/icon-home.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Portfolio"
        component={PortfolioTabNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/icon-chart.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Discover"
        component={DiscoverTabNavigation}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={24}
              source={require('../assets/icons/icon-search.png')}
            />
          ),
          header: () => <SearchHeader />,
        }}
      />
    </Tab.Navigator>
  );
};
