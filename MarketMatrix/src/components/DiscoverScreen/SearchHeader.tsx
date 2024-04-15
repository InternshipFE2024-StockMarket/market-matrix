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
    marginTop: '5%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    height: 45,
    paddingHorizontal: 30,
    fontSize: 16,
  },
});
