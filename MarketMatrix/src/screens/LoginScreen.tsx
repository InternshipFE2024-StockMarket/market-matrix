import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../components/AuthScreens/AuthContent';
import {FormCredentials} from '../constants/Interfaces';
import {login} from '../utils/http/auth';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const SignoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({email, password}: FormCredentials) => {
    setIsLoading(true);
    try {
      await login(email, password);
    } catch (err) {
      Alert.alert(
        'Authentication failed!',
        'Could not log you in. Please check your credentials or try again later! ',
      );
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingOverlay message="Login..." />
      ) : (
        <AuthContent isLogin onAuthenticate={handleLogin} />
      )}
    </View>
  );
};

export default SignoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
