import React from 'react';
import {StyleSheet, View} from 'react-native';
import BarChart from '../../components/PortfolioScreen/BarChart';
import {useAssetsPercentage} from '../../utils/functions/getAssetsPercentage';
import {useAuth} from '../../contexts/authContext';
import EmptyPortfolio from '../../components/PortfolioScreen/EmptyPortfolio';

const ChartPortfolio = () => {
  const userCtx = useAuth();
  const userId = userCtx.userId;
  const assetsData = useAssetsPercentage(userId);
  const allZeros = assetsData.every(asset => asset === 0);

  return (
    <>
      {allZeros ? (
        <EmptyPortfolio />
      ) : (
        <View style={styles.container}>
          <BarChart invData={assetsData} />
        </View>
      )}
    </>
  );
};

export default ChartPortfolio;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
