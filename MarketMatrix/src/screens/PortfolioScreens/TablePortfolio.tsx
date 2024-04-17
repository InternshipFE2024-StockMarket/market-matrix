import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useUserInvestmentsDetails} from '../../utils/functions/getUserInvestmentsDetails';
import DynamicTable from '../../components/PortfolioScreen/DynamicTable';

const TablePortfolio = () => {
  const userId = 123456;
  const userInvestmentsDetails = useUserInvestmentsDetails(userId);

  return (
    <View style={styles.rootContainer}>
      <DynamicTable data={userInvestmentsDetails} />
    </View>
  );
};

export default TablePortfolio;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
