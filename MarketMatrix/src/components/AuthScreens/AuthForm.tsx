import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: () => void;
}

const AuthForm = ({isLogin, onSubmit}: AuthFormProps) => {
  return (
    <View>
      <Text>AuthForm</Text>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({});
