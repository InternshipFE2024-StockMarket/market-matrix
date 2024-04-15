import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import DynamicTable from '../components/PortfolioScreen/DynamicTable';
import useFetchUserInvetments from '../utils/http/useFetchUserInvetments';
export interface TableData {
  ticker: string;
  amount: number;
  plValue: number;
  value: number;
  price: number;
  logo: string;
}

export const testData: TableData[] = [
  {
    ticker: 'AAPL',
    amount: 100,
    plValue: 50,
    value: 6000,
    price: 150,
    logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  },
  {
    ticker: 'GOOGL',
    amount: 50,
    plValue: -20,
    value: 10000,
    price: 200,
    logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  },
  {
    ticker: 'MSFT',
    amount: 75,
    plValue: 30,
    value: 4500,
    price: 100,
    logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  },
  {
    ticker: 'AMZN',
    amount: 25,
    plValue: 100,
    value: 20000,
    price: 300,
    logo: 'https://financialmodelingprep.com/image-stock/AAPL.png',
  },
];

const PortfolioScreen = () => {
  const userId = 123456;
  const userInv = useFetchUserInvetments(userId);
  console.log(userInv);

  return (
    <GradientBackground>
      <View style={styles.rootContainer}>
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
