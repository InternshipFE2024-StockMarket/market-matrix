import {Image, StyleSheet, TextInput, View, ViewStyle} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';

interface InputProps {
  inputStyle?: ViewStyle;
}

const SearchInput = ({inputStyle}: InputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder="Search"
        placeholderTextColor={Colors.text600}
      />
      <Image
        tintColor={Colors.text500}
        style={styles.search}
        source={require('../../assets/icons/icon-search.png')}
      />
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  input: {
    width: '90%',
    height: 60,
    borderRadius: 30,
  },
  search: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 40,
  },
});
