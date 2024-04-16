import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CompanyScreen} from '../screens/CompanyScreen';
import {BottomTabNavigation} from './BottomTabNavigation';
import LoginScreen from '../screens/LoginScreen';
import SignoutScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Signup" component={SignoutScreen} />
      <Stack.Screen name="Tabs" component={BottomTabNavigation} />
      <Stack.Screen name="Company" component={CompanyScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
