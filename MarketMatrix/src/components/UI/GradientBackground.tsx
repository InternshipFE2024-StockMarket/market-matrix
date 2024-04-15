// GradientBackground.js

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/Colors';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground = ({children}: GradientBackgroundProps) => {
  return (
    <LinearGradient
      colors={[
        Colors.background500,
        Colors.background600,
        Colors.background800,
      ]}
      locations={[0, 0.3, 0.6]}
      start={{x: 0.5, y: 0}}
      end={{x: 1, y: 1}}
      style={styles.container}>
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default GradientBackground;
