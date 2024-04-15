import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LineChart} from '../components/company-screen/LineChart';
import {CandlestickChart} from '../components/company-screen/CandlestickChart';
import {CompanyNews} from '../components/company-screen/CompanyNews';

const Tab = createMaterialTopTabNavigator();

interface CompanyNavigationProp {
  ticker: string;
}

export const CompanyTabNavigation = ({ticker}: CompanyNavigationProp) => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'rgba(177, 188, 222, 0.1)',
        },
        tabBarActiveTintColor: '#7fa4f8',
        tabBarInactiveTintColor: '#c7c7c7',
        tabBarIndicatorStyle: {
          backgroundColor: '#7fa4f8',
          height: 5,
        },
      }}>
      <Tab.Screen
        name="LineChart"
        component={LineChart}
        options={{title: 'Line Chart'}}
        initialParams={{userParams: {ticker}}}
      />
      <Tab.Screen
        name="CandlestickChart"
        component={CandlestickChart}
        options={{title: 'Candlestick Chart'}}
        initialParams={{userParams: {ticker}}}
      />
      <Tab.Screen name="News" component={CompanyNews} />
    </Tab.Navigator>
  );
};
