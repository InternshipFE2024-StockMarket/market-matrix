import {StyleSheet, View} from 'react-native';
import React from 'react';
import {useUserInvestmentsDetails} from '../../utils/functions/getUserInvestmentsDetails';
import DynamicTable from '../../components/PortfolioScreen/DynamicTable';
import {useAuth} from '../../contexts/authContext';
import LoadingOverlay from '../../components/UI/LoadingOverlay';

const TablePortfolio = () => {
  const userCtx = useAuth();
  const userId = userCtx.userId;
  const userInvestmentsDetails = useUserInvestmentsDetails(userId);
  console.log({userInvestmentsDetails});

  return (
    <View style={styles.rootContainer}>
      {userInvestmentsDetails.length === 0 ? (
        <LoadingOverlay message="Fetching user investments data..." />
      ) : (
        <DynamicTable data={userInvestmentsDetails} />
      )}
    </View>
  );
};

export default TablePortfolio;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
