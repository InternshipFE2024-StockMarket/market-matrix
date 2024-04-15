import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import DynamicTable from '../components/PortfolioScreen/DynamicTable';
import {useUserInvestmentsDetails} from '../utils/functions/getUserInvestmentsDetails';

const PortfolioScreen = () => {
  const userId = 123456;
  const userInvestmentsDetails = useUserInvestmentsDetails(userId);

  return (
    <GradientBackground>
      <View style={styles.rootContainer}>
        <DynamicTable data={userInvestmentsDetails} />
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
