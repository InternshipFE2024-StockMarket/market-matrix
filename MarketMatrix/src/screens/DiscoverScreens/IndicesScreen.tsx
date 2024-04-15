import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/UI/GradientBackground';
import {Colors} from '../../constants/Colors';

const IndicesScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>IndicesScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default IndicesScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
