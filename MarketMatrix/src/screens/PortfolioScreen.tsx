import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';

const PortfolioScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>PortfolioScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
