import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Input from '../components/AuthScreens/Input';

const SignoutScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>SignoutScreen</Text>
        <Input label="email" />
      </View>
    </GradientBackground>
  );
};

export default SignoutScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
