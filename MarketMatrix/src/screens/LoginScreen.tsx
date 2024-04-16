import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../components/AuthScreens/AuthContent';
import {FormCredentials} from '../constants/Interfaces';
import {login} from '../utils/http/auth';

const SignoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async ({email, password}: FormCredentials) => {
    setIsLoading(true);
    await login(email, password);
    setIsLoading(false);
  };
  if (isLoading) {
    return <Text>Loading</Text>;
  } else {
    return (
      <View style={styles.container}>
        <AuthContent isLogin onAuthenticate={handleLogin} />
      </View>
    );
  }
};

export default SignoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
