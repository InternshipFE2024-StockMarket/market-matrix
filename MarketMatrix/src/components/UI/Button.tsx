import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
}

const Button = ({onPress, children}: ButtonProps) => {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [styles.button, pressed ? {opacity: 0.5} : null]}>
        <Text style={styles.title}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
  },
  button: {
    margin: 5,
  },
  title: {
    color: Colors.text500,
    marginHorizontal: 10,
    marginVertical: 5,
  },
});
