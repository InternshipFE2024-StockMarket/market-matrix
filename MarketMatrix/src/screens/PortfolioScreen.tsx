import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import DynamicTable from '../components/UI/PortfolioScreen/DynamicTable';

export interface TableData {
  asset: string;
  amount: number;
  plValue: number;
  value: number;
}

const testData: TableData[] = [
  {asset: 'AAPL', amount: 100, plValue: 50, value: 6000},
  {asset: 'GOOGL', amount: 50, plValue: -20, value: 10000},
  {asset: 'MSFT', amount: 75, plValue: 30, value: 4500},
  {asset: 'AMZN', amount: 25, plValue: 100, value: 20000},
];

const PortfolioScreen = () => {
  return (
    <GradientBackground>
      <View style={styles.rootContainer}>
        <Text style={styles.text}>PortfolioScreen</Text>
        <DynamicTable data={testData} />
      </View>
    </GradientBackground>
  );
};

export default PortfolioScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
  text: {
    color: Colors.text500,
  },
});
