import {StyleSheet, View} from 'react-native';
import React from 'react';
import Input from './Input';
import Button from '../UI/Button';

interface AuthFormProps {
  isLogin?: boolean;
  onSubmit: () => void;
}

const AuthForm = ({isLogin, onSubmit}: AuthFormProps) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.form}>
        <Input label="Email Address" keyboardType="email-address" />
        {!isLogin && (
          <Input label="Confirm Email Address" keyboardType="email-address" />
        )}
        <Input label="Password" />
        {!isLogin && <Input label="Confirm Password" />}
        <View style={styles.buttons}>
          <Button>{isLogin ? 'Log In' : 'Sign Up'}</Button>
        </View>
      </View>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  rootContainer: {
    // flex: 1,
  },
  form: {
    marginHorizontal: 20,
  },
  buttons: {
    marginTop: 12,
  },
});
