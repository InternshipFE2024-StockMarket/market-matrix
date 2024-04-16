import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../components/UI/GradientBackground';
import AuthForm from '../components/AuthScreens/AuthForm';
import {Colors} from '../constants/Colors';
import Button from '../components/UI/Button';

const SignoutScreen = ({navigation}: any) => {
  const handleSubmit = () => {
    console.log('Submit');
  };

  const handleSwitchToLogin = () => {
    navigation.navigate('Login' as never);
  };
  return (
    <GradientBackground>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <AuthForm onSubmit={handleSubmit} />
        <Text style={styles.or}>or</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={handleSwitchToLogin}>Switch to Login</Button>
        </View>
      </View>
    </GradientBackground>
  );
};

export default SignoutScreen;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 70,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: Colors.text500,
    marginBottom: 20,
  },
  or: {
    color: Colors.text500,
    textAlign: 'center',
    marginVertical: 5,
  },
  buttonContainer: {
    marginHorizontal: 20,
  },
});
