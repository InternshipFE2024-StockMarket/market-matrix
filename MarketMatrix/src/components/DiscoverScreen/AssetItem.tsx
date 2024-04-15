/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Stock} from '../../constants/Interfaces';
import {Colors} from '../../constants/Colors';
import CardContainer from '../UI/CardContainer';

interface AssetItemProps {
  stock: Stock;
}

const AssetItem = ({stock}: AssetItemProps) => {
  const change = stock.priceChangePercentage;
  return (
    <CardContainer>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.symbol}>{stock.ticker}</Text>
          </View>

          <Text style={styles.name}>{stock.companyName}</Text>
        </View>

        <View style={styles.rightContainer}>
          <Text style={styles.close}>{stock.price}</Text>

          <Text
            style={{
              color: change > 0 ? Colors.green : Colors.pink,
              fontFamily: 'monospace',
              fontSize: 14,
            }}>
            {change > 0 ? '+' : ''}
            {change.toFixed(2)}%
          </Text>
        </View>
      </View>
    </CardContainer>
  );
};

export default AssetItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  leftContainer: {
    flex: 1,
    gap: 5,
  },
  rightContainer: {
    alignItems: 'flex-end',
    gap: 6,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    color: Colors.text500,
  },

  symbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.text500,
  },
  name: {
    fontSize: 16,
    color: Colors.text500,
  },
  icon: {
    width: 18,
    height: 18,
    tintColor: Colors.text500,
  },
  close: {
    fontFamily: 'monospace',
    fontSize: 14,
    color: Colors.text500,
  },
});
