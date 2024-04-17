import {StyleSheet, Text} from 'react-native';
import React from 'react';

interface CustomTextProps {
  children: React.ReactNode;
  style?: any;
}

const CustomText = ({children, style}: CustomTextProps) => {
  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default CustomText;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
  },
});
