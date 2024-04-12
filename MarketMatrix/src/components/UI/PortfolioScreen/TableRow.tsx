import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {TableData} from '../../../screens/PortfolioScreen';

const TableRow = ({asset, amount, plValue, value}: TableData) => {
  return (
    <View style={styles.row}>
      <Text style={styles.cell}>{asset}</Text>
      <Text style={styles.cell}>{amount}</Text>
      <Text style={styles.cell}>{plValue}</Text>
      <Text style={styles.cell}>{value}</Text>
    </View>
  );
};

export default TableRow;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});
