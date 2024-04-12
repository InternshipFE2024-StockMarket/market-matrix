import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {TestData} from '../../../screens/PortfolioScreen';

interface DynamicTableProps {
  data: TestData[];
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
        keyExtractor={index => index.toString()}
        renderItem={({item}) => (
          <View style={styles.row}>
            <Text style={styles.cell}>{item.asset}</Text>
            <Text style={styles.cell}>{item.amount}</Text>
            <Text style={styles.cell}>{item.plValue}</Text>
            <Text style={styles.cell}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  header: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerText: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});

export default DynamicTable;
