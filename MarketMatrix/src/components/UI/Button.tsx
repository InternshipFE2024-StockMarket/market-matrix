import {Pressable, View} from 'react-native';
import React from 'react';
import CustomText from './CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface ButtonProps {
  onPress?: () => void;
  children: React.ReactNode;
}

const Button = ({onPress, children}: ButtonProps) => {
  const {buttonStyles} = useThemeColorHook();
  return (
    <View style={buttonStyles.container}>
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
