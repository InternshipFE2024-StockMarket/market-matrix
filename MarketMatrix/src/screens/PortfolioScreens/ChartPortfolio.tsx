import {StyleSheet, View} from 'react-native';
import React from 'react';
import BarChart from '../../components/PortfolioScreen/BarChart';
import {useUserInvestmentsDetails} from '../../utils/functions/getUserInvestmentsDetails';
import {useAssetsPercentage} from '../../utils/functions/getAssetsPercentage';

const ChartPortfolio = () => {
  const userId = 123456;
  const userInvestments = useUserInvestmentsDetails(userId);

  const assetsData = useAssetsPercentage(userId);
  console.log({assetsData});

  console.log({userInvestments});

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
