import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import {CurrencyDropdown} from '../components/HomeScreenComponents/CurrencyDropdown';
import {Story} from '../components/HomeScreenComponents/Story';
import axios from 'axios';
import {StockChanges, UserData} from '../constants/Interfaces';
import {useStock} from '../contexts/stocksContext';
import {getTotalPortofolioValue} from '../utils/functions/getTotalPortofolioValue';

interface Story {
  company: string;
  change: number | string;
  logo: {
    uri: string;
  };
}

const HomeScreen = () => {
  const [currency, setCurrency] = useState('USD');
  const [changes, setChanges] = useState<StockChanges[]>([]);

  const {stocks} = useStock();

  let portfolioValue = Number(getTotalPortofolioValue());

  const currencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  });

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

  changes?.forEach(change => {
    let maxDifference = -Infinity;
    let minDifference = Infinity;

    const last7DaysValues = change.values.slice(-7);

    last7DaysValues.forEach(value => {
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

  const entries = Object.entries(maxDifferences);

  entries.sort(
    (a, b) =>
      Math.abs(parseFloat(b[1] as string)) -
      Math.abs(parseFloat(a[1] as string)),
  );

  const firstEntries = entries.slice(0, 5);

  let stories: Story[] = [];
  firstEntries.forEach(item => {
    let company = item[0];
    let change = item[1];
    const stock = stocks.find(stock => stock.ticker === company);
    if (stock) {
      let obj = {
        company: company,
        change: change,
        logo: {uri: stock.image},
      };
      stories.push(obj);
    }
  });

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
              <Text style={styles.value}>
                {currency === 'USD'
                  ? currencyFormat.format(Number(portfolioValue))
                  : currencyFormat.format(Number(portfolioValue * 1.06))}
              </Text>
            </View>
            <Text style={styles.valueDifference}>34.10 (0.19%)</Text>
          </View>
          <View style={styles.dropdown}>
            <CurrencyDropdown selected={currency} setSelected={setCurrency} />
          </View>
        </View>

        <View style={styles.storiesContaner}>
          {stories.map((story, index) => (
            <Story
              key={index}
              logo={story.logo}
              title={story.company}
              value={
                currency === 'USD'
                  ? (story.change as number)
                  : Number((Number(story.change) * 1.06).toFixed(2))
              }
              percentage={0.19}
              color={(story.change as number) >= 0 ? 'green' : 'pink'}
            />
          ))}
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
    position: 'relative',
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
  dropdown: {
    position: 'absolute',
    right: 0,
  },
});
