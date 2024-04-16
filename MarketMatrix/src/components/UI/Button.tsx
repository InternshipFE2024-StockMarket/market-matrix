import {Pressable, StyleSheet, Text} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface ButtonProps {
  onPress: () => void;
  title: string;
}

const Button = ({onPress, title}: ButtonProps) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text>{title}</Text>
    </Pressable>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: Colors.background800,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: Colors.text500,
  },
});
