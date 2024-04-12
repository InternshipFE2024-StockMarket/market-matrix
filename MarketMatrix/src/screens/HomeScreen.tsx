import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import {CurrencyDropdown} from '../components/HomeScreenComponents/CurrencyDropdown';

const HomeScreen = () => {
  const [currency, setCurrency] = useState('EUR');
  const [initialValue, setInitialValue] = useState(18000);
  const [value, setValue] = useState(18000);

  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

  useEffect(() => {
    if (currency === 'USD') {
      setValue(initialValue * 1.06);
    } else if (currency === 'EUR') {
      setValue(initialValue);
    }
  }, [currency, initialValue]);

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
              {/* <Text style={styles.currency}>$</Text> */}
              <Text style={styles.value}>{currencyFormat.format(value)}</Text>
            </View>
            {/* create a component to change dinamically the color and add arrow icon  */}
            <Text style={styles.valueDifference}>34.10 (0.19%)</Text>
          </View>
          <CurrencyDropdown selected={currency} setSelected={setCurrency} />
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
