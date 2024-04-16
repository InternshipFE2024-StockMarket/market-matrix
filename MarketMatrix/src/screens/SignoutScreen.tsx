import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import AuthContent from '../components/AuthScreens/AuthContent';
import {createUser} from '../utils/http/auth';
import {FormCredentials} from '../constants/Interfaces';

const SignoutScreen = () => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSignup = async ({email, password}: FormCredentials) => {
    console.log({email});
    console.log({password});

    setIsLoading(true);
    await createUser(email, password);
    setIsLoading(false);
  };

  if (isLoading) {
    <Text>Loading ..</Text>;
  } else {
    return (
      <View style={styles.container}>
        <AuthContent onAuthenticate={handleSignup} />
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
