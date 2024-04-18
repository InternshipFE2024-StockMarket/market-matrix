/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/react-in-jsx-scope */
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import TablePortfolio from '../screens/PortfolioScreens/TablePortfolio';
import ChartPortfolio from '../screens/PortfolioScreens/ChartPortfolio';
import {NavigationIcon} from '../components/UI/NavigationIcon';
import Header from '../components/PortfolioScreen/Header';
import GradientBackground from '../components/UI/GradientBackground';
import {useWindowDimensions} from 'react-native';
import {useThemeContext} from '../contexts/themeContext';

const Stack = createNativeStackNavigator();
const Tab = createMaterialTopTabNavigator();

const PortfolioTabNavigation = () => {
  return (
    <GradientBackground>
      <Stack.Navigator>
        <Stack.Screen
          name="PortfolioScreen"
          component={TabNavigator}
          options={{
            header: () => <Header />,
          }}
        />
      </Stack.Navigator>
    </GradientBackground>
  );
};

const TabNavigator = () => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const {theme} = useThemeContext();

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0)',
          height: isLandscape ? 45 : 65,
        },
        tabBarActiveTintColor: theme.background500,
        tabBarInactiveTintColor: theme.text500,
        tabBarIndicatorStyle: {
          backgroundColor: theme.background500,
        },
      }}>
      <Tab.Screen
        name="Table"
        component={TablePortfolio}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={20}
              source={require('../assets/icons/table.png')}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chart"
        component={ChartPortfolio}
        options={{
          tabBarIcon: ({focused, color}) => (
            <NavigationIcon
              focused={focused}
              color={color}
              size={20}
              source={require('../assets/icons/bar-chart.png')}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default PortfolioTabNavigation;
