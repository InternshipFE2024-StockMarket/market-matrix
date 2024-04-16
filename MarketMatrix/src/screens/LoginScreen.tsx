import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../components/UI/GradientBackground';
import {Colors} from '../constants/Colors';

const LoginScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>LoginScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
