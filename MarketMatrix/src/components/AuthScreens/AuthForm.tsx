import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Input from './Input';
import Button from '../UI/Button';
import {FormCredentials, FormValidation} from '../../constants/Interfaces';

interface AuthFormProps {
  isLogin?: boolean;
  onSubmit: (credentials: FormCredentials) => void;
  credentialsInvalid: FormValidation;
}

const AuthForm = ({isLogin, onSubmit}: AuthFormProps) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredConfirmEmail, setEnteredConfirmEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');

  const updateInputValueHandler = (inputType: string, enteredValue: string) => {
    switch (inputType) {
      case 'email':
        setEnteredEmail(enteredValue);
        break;
      case 'confirmEmail':
        setEnteredConfirmEmail(enteredValue);
        break;
      case 'password':
        setEnteredPassword(enteredValue);
        break;
      case 'confirmPassword':
        setEnteredConfirmPassword(enteredValue);
        break;
    }
  };

  function submitHandler() {
    onSubmit({
      email: enteredEmail,
      confirmEmail: enteredConfirmEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    });
  }

  return (
    <View style={styles.rootContainer}>
      <View style={styles.form}>
        <Input
          label="Email Address"
          keyboardType="email-address"
          value={enteredEmail}
          onUpdateValue={updateInputValueHandler.bind(this, 'email')}
        />
        {!isLogin && (
          <Input
            label="Confirm Email Address"
            keyboardType="email-address"
            value={enteredConfirmEmail}
            onUpdateValue={updateInputValueHandler.bind(this, 'confirmEmail')}
          />
        )}
        <Input
          label="Password"
          value={enteredPassword}
          onUpdateValue={updateInputValueHandler.bind(this, 'password')}
        />
        {!isLogin && (
          <Input
            label="Confirm Password"
            value={enteredConfirmPassword}
            onUpdateValue={updateInputValueHandler.bind(
              this,
              'confirmPassword',
            )}
          />
        )}
        <View style={styles.buttons}>
          <Button onPress={submitHandler}>
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
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
