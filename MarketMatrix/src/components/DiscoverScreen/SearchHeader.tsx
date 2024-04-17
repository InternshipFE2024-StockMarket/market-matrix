import {SafeAreaView, StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import SearchInput from './SearchInput';

const SearchHeader = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <SearchInput inputStyle={styles.input} />
      </View>
    </SafeAreaView>
  );
};

export default SearchHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background500,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  input: {
    height: 45,
    paddingHorizontal: 10,
    fontSize: 16,
  },
});
