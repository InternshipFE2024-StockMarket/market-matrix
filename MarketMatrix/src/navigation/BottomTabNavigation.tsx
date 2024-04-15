import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import PortfolioScreen from '../screens/PortfolioScreen';
import {Colors} from '../constants/Colors';
import {NavigationIcon} from '../components/UI/NavigationIcon';
import DiscoverTabNavigation from './DiscoverTabNavigation';
import SearchHeader from '../components/DiscoverScreen/SearchHeader';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
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
        component={PortfolioScreen}
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
