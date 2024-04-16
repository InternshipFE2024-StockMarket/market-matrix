import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../components/AuthScreens/AuthContent';
import {createUser} from '../utils/http/auth';
import {FormCredentials} from '../constants/Interfaces';
import LoadingOverlay from '../components/UI/LoadingOverlay';

const SignoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async ({email, password}: FormCredentials) => {
    setIsLoading(true);
    try {
      await createUser(email, password);
    } catch (err) {
      Alert.alert(
        'Authentication failed!',
        'Could not create user. Please check your credentials or try again later! ',
      );
    }
    setIsLoading(false);
  };

  return (
    <View style={styles.container}>
      {isLoading ? (
        <LoadingOverlay message="Create account..." />
      ) : (
        <AuthContent onAuthenticate={handleSignup} />
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
