import {
  Image,
  Pressable,
  TextInput,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import React from 'react';
import {useSearchContext} from '../../contexts/searchContext';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../../contexts/authContext';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface InputProps {
  inputStyle?: ViewStyle;
}

const SearchInput = ({inputStyle}: InputProps) => {
  const {theme} = useThemeContext();
  const {searchInputStyles} = useThemeColorHook();
  const {inputValue, setInputValue} = useSearchContext();
  const navigation = useNavigation();
  const authCtx = useAuth();
  const logout = authCtx.logout;
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;

  const handleSubmit = () => {
    navigation.navigate('Overview' as never);
  };

  return (
    <View style={searchInputStyles.container}>
      <TextInput
        style={[searchInputStyles.input, inputStyle]}
        placeholder="Search"
        placeholderTextColor={theme.text600}
        value={inputValue}
        onChangeText={setInputValue}
        onSubmitEditing={handleSubmit}
      />
      <Pressable
        onPress={handleSubmit}
        style={
          isLandscape
            ? searchInputStyles.landscapeSearch
            : searchInputStyles.search
        }>
        <Image
          tintColor={theme.text500}
          style={searchInputStyles.image}
          source={require('../../assets/icons/icon-search.png')}
        />
      </Pressable>
      <View
        style={
          isLandscape
            ? searchInputStyles.landscapeButtonContainer
            : searchInputStyles.buttonContainer
        }>
        <Pressable onPress={logout}>
          <Image
            style={searchInputStyles.imageLogout}
            source={require('../../assets/icons/logout.png')}
          />
        </Pressable>
      </View>
    </View>
  );
};

export default SearchInput;
