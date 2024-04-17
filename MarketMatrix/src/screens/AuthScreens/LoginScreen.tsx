import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../../components/AuthScreens/AuthContent';
import {FormCredentials} from '../../constants/Interfaces';
import {login} from '../../utils/http/auth';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import {useAuth} from '../../contexts/authContext';

const SignoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {authenticate} = useAuth();

  const handleLogin = async ({email, password}: FormCredentials) => {
    setIsLoading(true);
    try {
      const token = await login(email, password);
      authenticate(token);
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
