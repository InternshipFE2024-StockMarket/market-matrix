// GradientBackground.js

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useThemeContext} from '../../contexts/themeContext';

interface GradientBackgroundProps {
  children: React.ReactNode;
}

const GradientBackground = ({children}: GradientBackgroundProps) => {
  const {theme} = useThemeContext();

  return (
    <LinearGradient
      colors={[theme.background500, theme.background600, theme.background800]}
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
