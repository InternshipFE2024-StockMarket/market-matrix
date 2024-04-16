import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import GradientBackground from '../UI/GradientBackground';
import {Colors} from '../../constants/Colors';
import AuthForm from './AuthForm';
import {useNavigation} from '@react-navigation/core';
import Button from '../UI/Button';
import {FormCredentials, FormValidation} from '../../constants/Interfaces';

interface AuthContentProps {
  isLogin?: boolean;
  onAuthenticate?: any;
}

const AuthContent = ({isLogin, onAuthenticate}: AuthContentProps) => {
  const navigation = useNavigation();

  const [credentialsInvalid, setCredentialsInvalid] = useState<FormValidation>({
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const handleSubmit = (credentials: FormCredentials) => {
    let {email, confirmEmail, password, confirmPassword} = credentials;

    email = email.trim();
    password = password.trim();

    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    console.log('Submit');
    onAuthenticate({email, password});
  };

  const handleSwitchToLogin = () => {
    if (isLogin) {
      navigation.navigate('Signup' as never);
    } else {
      navigation.navigate('Login' as never);
    }
  };

  return (
    <GradientBackground>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Create Account</Text>
        <AuthForm
          isLogin={isLogin}
          onSubmit={handleSubmit}
          credentialsInvalid={credentialsInvalid}
        />
        <Text style={styles.or}>or</Text>
        <View style={styles.buttonContainer}>
          <Button onPress={handleSwitchToLogin}>
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
          </Button>
        </View>
      </View>
    </GradientBackground>
  );
};

export default AuthContent;

const styles = StyleSheet.create({
  formContainer: {
    flex: 1,
    marginTop: 80,
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
