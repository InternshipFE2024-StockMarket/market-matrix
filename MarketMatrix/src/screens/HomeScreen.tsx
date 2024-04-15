import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import {CurrencyDropdown} from '../components/HomeScreenComponents/CurrencyDropdown';
import {Story} from '../components/HomeScreenComponents/Story';
import axios from 'axios';
import {Change} from '../constants/Interfaces';

const HomeScreen = () => {
  const [currency, setCurrency] = useState('EUR');
  const [initialValue, setInitialValue] = useState(18000);
  const [value, setValue] = useState(18000);

  const [changes, setChanges] = useState<Change[]>([]);

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/src/db.json');
        setChanges(response.data.changes);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const maxDifferences: {[ticker: string]: number | string} = {};

  changes.forEach(change => {
    let maxDifference = -Infinity;
    let minDifference = Infinity;

    change.values.forEach(value => {
      const difference = value.close - value.open;

      if (difference > maxDifference) {
        maxDifference = difference;
      }
      if (difference < minDifference) {
        minDifference = difference;
      }
    });

    if (Math.abs(minDifference) > maxDifference) {
      maxDifferences[change.ticker] = minDifference.toFixed(2);
    } else {
      maxDifferences[change.ticker] = maxDifference.toFixed(2);
    }
  });

  console.log(maxDifferences);

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
              <Text style={styles.value}>{currencyFormat.format(value)}</Text>
            </View>
            {/* create a component to change dinamically the color and add arrow icon  */}
            <Text style={styles.valueDifference}>34.10 (0.19%)</Text>
          </View>
          <CurrencyDropdown selected={currency} setSelected={setCurrency} />
        </View>

        <View style={styles.storiesContaner}>
          <Story
            logo={require('../assets/icons/icon-apple.png')}
            title="APPLE"
            value={34.1}
            percentage={0.19}
            color="green"
          />
          <Story
            logo={require('../assets/icons/icon-apple.png')}
            title="APPL"
            value={34.1}
            percentage={0.19}
            color="red"
          />
          <Story
            logo={require('../assets/icons/icon-apple.png')}
            title="APPL"
            value={34.1}
            percentage={0.19}
            color="red"
          />
          <Story
            logo={require('../assets/icons/icon-apple.png')}
            title="APPL"
            value={34.1}
            percentage={0.19}
            color="green"
          />
          <Story
            logo={require('../assets/icons/icon-apple.png')}
            title="APPL"
            value={34.1}
            percentage={0.19}
            color="green"
          />
          {/* <Story />
          <Story /> */}
        </View>
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
  storiesContaner: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
