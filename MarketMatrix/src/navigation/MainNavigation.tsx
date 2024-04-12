import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CompanyScreen} from '../screens/CompanyScreen';
import {BottomTabNavigation} from './BottomTabNavigation';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Tabs" component={BottomTabNavigation} />
      <Stack.Screen name="Company" component={CompanyScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
