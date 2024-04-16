import {
  Image,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import {useSearchContext} from '../../contexts/searchContext';
import {useNavigation} from '@react-navigation/native';

interface InputProps {
  inputStyle?: ViewStyle;
}

const SearchInput = ({inputStyle}: InputProps) => {
  const {inputValue, setInputValue} = useSearchContext();
  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Overview' as never);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={[styles.input, inputStyle]}
        placeholder="Search"
        placeholderTextColor={Colors.text600}
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={handleSubmit}
      />
      <Pressable onPress={handleSubmit} style={styles.search}>
        <Image
          tintColor={Colors.text500}
          style={styles.image}
          source={require('../../assets/icons/icon-search.png')}
        />
      </Pressable>
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
    backgroundColor: Colors.background600,
    width: '90%',
    height: 60,
    borderRadius: 10,
    color: Colors.text500,
  },
  search: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 40,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});