import {KeyboardTypeOptions, StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import CustomText from '../UI/CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface InputProps {
  label: string;
  keyboardType?: KeyboardTypeOptions;
  onUpdateValue?: (enteredValue: any) => void;
  value?: string;
  isInvalid?: boolean;
  type?: 'text' | 'password';
}

const Input = ({
  label,
  keyboardType,
  onUpdateValue,
  value,
  isInvalid,
  type = 'text',
}: InputProps) => {
  const {inputStyles} = useThemeColorHook();

  return (
    <View style={inputStyles.inputContainer}>
      <CustomText
        style={[inputStyles.label, isInvalid && inputStyles.labelInvalid]}>
        {label}
      </CustomText>
      <TextInput
        style={[inputStyles.input, isInvalid && inputStyles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
        secureTextEntry={type === 'password'}
      />
    </View>
  );
};

export default Input;
