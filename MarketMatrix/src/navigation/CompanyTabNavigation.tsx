import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {LineChart} from '../components/company-screen/LineChart';
import {CandlestickChart} from '../components/company-screen/CandlestickChart';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {StockDetails} from '../components/company-screen/StockDetails';
import {useEffect, useState} from 'react';
import {Dimensions} from 'react-native';

const Tab = createMaterialTopTabNavigator();

interface CompanyNavigationProp {
  id: string;
}

export const CompanyTabNavigation = ({id}: CompanyNavigationProp) => {
  const [screenHeight, setScreenHeight] = useState(
    Dimensions.get('window').height,
  );
  useEffect(() => {
    const onChange = () => {
      const {height} = Dimensions.get('window');
      setScreenHeight(height);
    };

    const subscription = Dimensions.addEventListener('change', onChange);
    return () => subscription?.remove();
  }, [screenHeight]);

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
      {screenHeight < 500 && (
        <Tab.Screen
          name="Details"
          component={StockDetails}
          options={{title: 'Details'}}
          initialParams={{id: id}}
        />
      )}
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
