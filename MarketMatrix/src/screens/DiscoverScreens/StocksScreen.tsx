import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/UI/GradientBackground';
import {Colors} from '../../constants/Colors';

const StocksScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>StocksScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default StocksScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
