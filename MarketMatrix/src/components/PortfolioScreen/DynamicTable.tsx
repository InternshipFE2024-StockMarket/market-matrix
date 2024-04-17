import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import TableRow from './TableRow';
import {UserInvestmentsDetails} from '../../constants/Interfaces';

interface DynamicTableProps {
  data: UserInvestmentsDetails[];
}

const DynamicTable = ({data}: DynamicTableProps) => {
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  return (
    <View style={styles.rootContainer}>
      <View style={styles.headerContainer}>
        <View style={isLandscape ? styles.landscapeHeader : styles.header}>
          <Text style={styles.headerText}>Asset</Text>
          <Text style={styles.headerText}>Amount</Text>
          <Text style={styles.headerText}>P/L</Text>
          <Text style={styles.headerText}>Value</Text>
        </View>
      </View>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <TableRow
            id={item.id}
            ticker={item.ticker}
            amount={item.amount}
            plValue={item.plValue}
            dynamicValue={item.dynamicValue}
            currentPrice={item.currentPrice}
            image={item.image}
            type={item.type}
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
  landscapeHeader: {
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
