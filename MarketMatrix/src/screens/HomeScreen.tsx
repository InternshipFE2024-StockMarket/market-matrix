import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import {CurrencyDropdown} from '../components/HomeScreenComponents/CurrencyDropdown';

const HomeScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.homeWrapper}>
        <View>
          <Text style={styles.title}>Market Matrix</Text>
        </View>
        <View style={styles.header}>
          <View>
            <Text style={styles.text}>Your total value:</Text>
            <View style={styles.valueContainer}>
              <Text style={styles.currency}>$</Text>
              <Text style={styles.value}>180,20.66</Text>
            </View>
            {/* create a component to change dinamically the color and add arrow icon  */}
            <Text style={styles.valueDifference}>34.10 (0.19%)</Text>
          </View>
          <CurrencyDropdown />
        </View>
        <Text style={styles.text}>Stories</Text>
        <Text style={styles.text}>Chart</Text>
      </View>
    </GradientBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  title: {
    color: Colors.text500,
    fontSize: 20,
    alignSelf: 'center',
  },
  homeWrapper: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 40,
  },
  text: {
    color: Colors.text500,
    fontSize: 16,
  },
  valueContainer: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    color: Colors.text500,
    fontSize: 32,
  },
  value: {
    color: Colors.text500,
    fontSize: 44,
  },
  valueDifference: {
    color: Colors.pink,
    fontSize: 20,
  },
});
