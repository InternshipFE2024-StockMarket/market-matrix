import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LineChart} from '../components/company-screen/LineChart';
import {CandlestickChart} from '../components/company-screen/CandlestickChart';
import {CompanyNews} from '../components/company-screen/CompanyNews';

const Tab = createMaterialTopTabNavigator();

export const CompanyTabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(177, 188, 222, 0.1)',
        },
        tabBarActiveTintColor: '#ffffff',
        tabBarInactiveTintColor: '#c7c7c7',
        tabBarIndicatorStyle: {
          backgroundColor: '#ffffff',
          height: 2,
        },
      }}>
      <Tab.Screen
        name="LineChart"
        component={LineChart}
        options={{title: 'Line Chart'}}
      />
      <Tab.Screen
        name="CandlestickChart"
        component={CandlestickChart}
        options={{title: 'Candlestick Chart'}}
      />
      <Tab.Screen name="News" component={CompanyNews} />
    </Tab.Navigator>
  );
};
