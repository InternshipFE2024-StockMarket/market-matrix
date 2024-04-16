import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface InputProps {
  label: string;
  keyboardType?: KeyboardTypeOptions;
  onUpdateValue?: () => void;
  value?: string;
  isInvalid?: boolean;
}

const Input = ({
  label,
  keyboardType,
  onUpdateValue,
  value,
  isInvalid,
}: InputProps) => {
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label, isInvalid && styles.labelInvalid]}>
        {label}
      </Text>
      <TextInput
        style={[styles.input, isInvalid && styles.inputInvalid]}
        autoCapitalize="none"
        keyboardType={keyboardType}
        onChangeText={onUpdateValue}
        value={value}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    marginVertical: 8,
  },
  label: {
    color: 'white',
    marginBottom: 4,
  },
  labelInvalid: {
    color: Colors.pink,
  },
  input: {
    paddingVertical: 8,
    paddingHorizontal: 6,
    backgroundColor: Colors.background500,
    borderRadius: 10,
    fontSize: 16,
    color: Colors.text500,
  },
  inputInvalid: {
    backgroundColor: Colors.pink,
  },
});
