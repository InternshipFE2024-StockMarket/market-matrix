import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import GradientBackground from '../../components/UI/GradientBackground';
import {Colors} from '../../constants/Colors';

const CryptoScreen = () => {
  return (
    <GradientBackground>
      <View>
        <Text style={styles.text}>CryptoScreen</Text>
      </View>
    </GradientBackground>
  );
};

export default CryptoScreen;

const styles = StyleSheet.create({
  text: {
    color: Colors.text500,
  },
});
