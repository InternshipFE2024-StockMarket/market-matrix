import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import GradientBackground from '../../components/UI/GradientBackground';

const OverviewScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>OverviewScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default OverviewScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
