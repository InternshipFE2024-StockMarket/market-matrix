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
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Asset</Text>
        <Text style={styles.headerText}>Amount</Text>
        <Text style={styles.headerText}>P/L</Text>
        <Text style={styles.headerText}>Value</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.asset}
        renderItem={({item}) => (
          <TableRow
            asset={item.asset}
            amount={item.amount}
            plValue={item.plValue}
            value={item.value}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  headerText: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: Colors.text500,
  },
});

export default DynamicTable;
