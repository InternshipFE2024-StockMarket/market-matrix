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
