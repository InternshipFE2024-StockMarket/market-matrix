import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TableData} from '../../screens/PortfolioScreen';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../constants/Colors';
import AssetCell from './AssetCell';

const TableRow = ({ticker, amount, plValue, value, price, logo}: TableData) => {
  return (
    <LinearGradient
      colors={[Colors.cardBackground500, Colors.cardBackground700]}
      style={styles.container}>
      <View style={styles.row}>
        <AssetCell
          ticker={ticker}
          price={price}
          logoSource={logo}
          style={styles.cell}
        />
        <Text style={[styles.cell, styles.text]}>{amount}</Text>
        <Text
          style={[
            {color: plValue > 0 ? Colors.green : Colors.pink},
            styles.cell,
          ]}>
          {plValue}
        </Text>
        <Text style={[styles.cell, styles.text]}>{value}</Text>
      </View>
    </LinearGradient>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  container: {},
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  text: {
    color: Colors.text500,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
  },
});
