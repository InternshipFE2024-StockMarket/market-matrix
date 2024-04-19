import {Pressable, StyleSheet, View, ViewStyle} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
}

const Button = ({onPress, children, style}: ButtonProps) => {
  const {buttonStyles} = useThemeColorHook();
  return (
    <View style={[buttonStyles.container, style]}>
      <Pressable
        onPress={onPress}
        style={({pressed}) => [
          buttonStyles.button,
          pressed ? {opacity: 0.5} : null,
        ]}>
        <CustomText style={buttonStyles.title}>{children}</CustomText>
      </Pressable>
    </View>
  );
};

export default Button;
