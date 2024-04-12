import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';

const DiscoverScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>DiscoverScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default DiscoverScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
