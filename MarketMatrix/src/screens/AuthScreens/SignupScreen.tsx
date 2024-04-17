import {Alert, StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../../components/AuthScreens/AuthContent';
import {createUser} from '../../utils/http/auth';
import {FormCredentials} from '../../constants/Interfaces';
import LoadingOverlay from '../../components/UI/LoadingOverlay';
import {useAuth} from '../../contexts/authContext';

const SignoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {authenticate} = useAuth();

  const handleSignup = async ({email, password}: FormCredentials) => {
    setIsLoading(true);
    try {
      const token = await createUser(email, password);
      authenticate(token);
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
