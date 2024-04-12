import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';

const HomeScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>HomeScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {color: Colors.text500},
});
