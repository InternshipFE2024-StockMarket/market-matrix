import React from 'react';
import {Button, Text, View} from 'react-native';
import GradientBackground from '../components/UI/GradientBackground';

export const CompanyScreen = ({navigation}: any) => {
  return (
    <GradientBackground>
      <View>
        <Text>CompanyScreen</Text>
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </View>
    </GradientBackground>
  );
};
