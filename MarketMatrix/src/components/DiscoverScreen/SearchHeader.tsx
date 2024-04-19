import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import SearchInput from './SearchInput';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

const SearchHeader = () => {
  const {searchHeaderStyles} = useThemeColorHook();
  return (
    <SafeAreaView style={searchHeaderStyles.container}>
      <View style={searchHeaderStyles.searchContainer}>
        <SearchInput inputStyle={searchHeaderStyles.input} />
      </View>
    </SafeAreaView>
  );
};

export default SearchHeader;
