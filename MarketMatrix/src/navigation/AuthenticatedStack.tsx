import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {BottomTabNavigation} from './BottomTabNavigation';
import {CompanyScreen} from '../screens/CompanyScreen';

const Stack = createNativeStackNavigator();

const AuthenticatedStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="Tabs" component={BottomTabNavigation} />
    <Stack.Screen name="Company" component={CompanyScreen} />
  </Stack.Navigator>
);

export default AuthenticatedStack;
