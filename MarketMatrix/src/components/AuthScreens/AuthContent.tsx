import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import GradientBackground from '../UI/GradientBackground';
import AuthForm from './AuthForm';
import {useNavigation} from '@react-navigation/core';
import Button from '../UI/Button';
import {FormCredentials, FormValidation} from '../../constants/Interfaces';
import CustomText from '../UI/CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface AuthContentProps {
  isLogin?: boolean;
  onAuthenticate?: any;
}

const AuthContent = ({isLogin, onAuthenticate}: AuthContentProps) => {
  const navigation = useNavigation();

  const {authStyles} = useThemeColorHook();

  const [credentialsInvalid, setCredentialsInvalid] = useState<FormValidation>({
    name: false,
    email: false,
    password: false,
    confirmEmail: false,
    confirmPassword: false,
  });

  const handleSubmit = (credentials: FormCredentials) => {
    let {name, email, confirmEmail, password, confirmPassword} = credentials;
    console.log({credentials});

    name = name.trim();
    email = email.trim();
    password = password.trim();

    const nameIsValid = name.length > 0;
    const emailIsValid = email.includes('@');
    const passwordIsValid = password.length > 6;
    const emailsAreEqual = email === confirmEmail;
    const passwordsAreEqual = password === confirmPassword;
    console.log(
      {nameIsValid},
      {emailIsValid},
      {passwordIsValid},
      {emailsAreEqual},
      {
        passwordsAreEqual,
      },
    );

    if (
      !emailIsValid ||
      !passwordIsValid ||
      (!isLogin && (!emailsAreEqual || !passwordsAreEqual || !nameIsValid))
    ) {
      Alert.alert('Invalid input', 'Please check your entered credentials.');
      setCredentialsInvalid({
        name: !nameIsValid,
        email: !emailIsValid,
        confirmEmail: !emailIsValid || !emailsAreEqual,
        password: !passwordIsValid,
        confirmPassword: !passwordIsValid || !passwordsAreEqual,
      });
      return;
    }
    onAuthenticate({name, email, password});
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
      <View style={authStyles.formContainer}>
        <CustomText style={authStyles.title}>Create Account</CustomText>
        <AuthForm
          isLogin={isLogin}
          onSubmit={handleSubmit}
          credentialsInvalid={credentialsInvalid}
        />
        <CustomText style={authStyles.or}>or</CustomText>
        <View style={authStyles.buttonContainer}>
          <Button onPress={handleSwitchToLogin}>
            {isLogin ? 'Switch to Signup' : 'Switch to Login'}
          </Button>
        </View>
      </View>
    </GradientBackground>
  );
};

export default AuthContent;
