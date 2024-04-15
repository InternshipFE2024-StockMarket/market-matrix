import {StyleSheet, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/Colors';

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({children}: CardContainerProps) => {
  return (
    <LinearGradient
      colors={[Colors.cardBackground500, Colors.background600]}
      locations={[0, 0.8]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={styles.container}>
      <View>{children}</View>
    </LinearGradient>
  );
};

export default CardContainer;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    borderColor: Colors.border,
    borderWidth: 0.3,
  },
});
