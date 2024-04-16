import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import GradientBackground from './GradientBackground';

interface LoadingOverlayProps {
  message: string;
}

function LoadingOverlay({message}: LoadingOverlayProps) {
  return (
    <GradientBackground>
      <View style={styles.rootContainer}>
        <Text style={styles.message}>{message}</Text>
        <ActivityIndicator size="large" />
      </View>
    </GradientBackground>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 12,
  },
});
