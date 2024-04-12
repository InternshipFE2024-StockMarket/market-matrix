import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/Colors';

const CardContainer = () => {
  return (
    <LinearGradient
      colors={[Colors.cardBackground, Colors.background600]}
      locations={[0, 0.8]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.container}>
      <View>
        <Text>CardContainer</Text>
      </View>
    </LinearGradient>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
  },
});
