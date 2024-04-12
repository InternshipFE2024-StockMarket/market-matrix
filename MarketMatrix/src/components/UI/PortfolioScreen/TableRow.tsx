import {StyleSheet, Text, View, Dimensions} from 'react-native';
import React from 'react';
import {TableData} from '../../../screens/PortfolioScreen';
import LinearGradient from 'react-native-linear-gradient';
import {Colors} from '../../../constants/Colors';
import AssetCell from './AssetCell';

const TableRow = ({ticker, amount, plValue, value, price, logo}: TableData) => {
  return (
    <LinearGradient
      colors={[`${Colors.cardBackground}10`, `${Colors.background800}`]}
      style={styles.container}>
      <View style={styles.row}>
        <AssetCell ticker={ticker} price={price} logoSource={logo} />
        <Text style={styles.cell}>{amount}</Text>
        <Text style={styles.cell}>{plValue}</Text>
        <Text style={styles.cell}>{value}</Text>
      </View>
    </LinearGradient>
  );
};

export default TableRow;

const displayWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    // width: displayWidth,
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});
