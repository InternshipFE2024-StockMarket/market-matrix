import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../components/UI/GradientBackground';
import AuthForm from '../components/AuthScreens/AuthForm';
import {Colors} from '../constants/Colors';

const SignoutScreen = () => {
  const handleSubmit = () => {
    console.log('Submit');
  };

  return (
    <GradientBackground>
      <View style={styles.formContainer}>
        <Text style={styles.text}>Create Account</Text>
        <AuthForm onSubmit={handleSubmit} />
      </View>
    </GradientBackground>
  );
};

export default SignoutScreen;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.text500,
    marginBottom: 20,
  },
});
