import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import CustomText from './CustomText';

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Button = ({onPress, children, style}: ButtonProps) => {
  return (
    <View style={[styles.container, style]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [styles.button, pressed ? {opacity: 0.5} : null]}>
        <CustomText style={styles.title}>{children}</CustomText>
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
