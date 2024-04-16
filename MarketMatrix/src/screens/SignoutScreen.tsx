import {StyleSheet, View} from 'react-native';
import React from 'react';
import AuthContent from '../components/AuthScreens/AuthContent';

const SignoutScreen = () => {
  return (
    <View style={styles.container}>
      <AuthContent />
    </View>
  );
};

export default SignoutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
