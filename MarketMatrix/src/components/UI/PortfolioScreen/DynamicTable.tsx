import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TableData} from '../../../screens/PortfolioScreen';
import {Colors} from '../../../constants/Colors';
import TableRow from './TableRow';

interface DynamicTableProps {
  data: TableData[];
}

const DynamicTable = ({data}: DynamicTableProps) => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.header}>
          <Text style={styles.headerText}>Asset</Text>
          <Text style={styles.headerText}>Amount</Text>
          <Text style={styles.headerText}>P/L</Text>
          <Text style={styles.headerText}>Value</Text>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.ticker}
        renderItem={({item}) => (
          <TableRow
            ticker={item.ticker}
            amount={item.amount}
            plValue={item.plValue}
            value={item.value}
            price={item.price}
            logo={item.logo}
          />
        )}
      />
    </View>
  );
};

export default DynamicTable;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginHorizontal: 5,
  },
  headerContainer: {
    backgroundColor: Colors.cardBackground500,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.text500,
  },
});
