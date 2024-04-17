import React from 'react';
import {StyleSheet, View} from 'react-native';
import BarChart from '../../components/PortfolioScreen/BarChart';
import {useAssetsPercentage} from '../../utils/functions/getAssetsPercentage';

const ChartPortfolio = () => {
  const userId = 123456;
  const assetsData = useAssetsPercentage(userId);

  return (
    <View style={styles.container}>
      <BarChart invData={assetsData} />
    </View>
  );
};

export default ChartPortfolio;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
