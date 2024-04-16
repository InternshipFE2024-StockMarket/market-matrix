import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LineChart} from '../components/company-screen/LineChart';
import {CandlestickChart} from '../components/company-screen/CandlestickChart';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Tab = createMaterialTopTabNavigator();

interface CompanyNavigationProp {
  id: string;
}

export const CompanyTabNavigation = ({id}: CompanyNavigationProp) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Colors.background500,
        },
        tabBarActiveTintColor: '#7fa4f8',
        tabBarInactiveTintColor: '#ffffff',
        tabBarIndicatorStyle: {
          backgroundColor: '#7fa4f8',
          height: 5,
        },
      }}>
      <Tab.Screen
        name="LineChart"
        component={LineChart}
        options={{title: 'Line Chart'}}
        initialParams={{userParams: {id}}}
      />
      <Tab.Screen
        name="CandlestickChart"
        component={CandlestickChart}
        options={{title: 'Candlestick Chart'}}
        initialParams={{userParams: {id}}}
      />
    </Tab.Navigator>
  );
};
