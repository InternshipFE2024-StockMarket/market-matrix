import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import DynamicTable from '../components/PortfolioScreen/DynamicTable';
import {useUserInvestmentsDetails} from '../utils/functions/getUserInvestmentsDetails';

const PortfolioScreen = () => {
  const userId = 123456;
  const userInvestmentsDetails = useUserInvestmentsDetails(userId);
  const userPortfolioValue = 99747.99;
  const plPortfolioValue = -248.57;

  return (
    <GradientBackground>
      <View style={styles.rootContainer}>
        <View style={styles.header}>
          <Text style={[styles.text, styles.portfolioValue]}>
            ${userPortfolioValue}
          </Text>
          <Text
            style={{color: plPortfolioValue > 0 ? Colors.green : Colors.pink}}>
            {plPortfolioValue}
          </Text>
        </View>
        <Text style={[styles.text, styles.title]}>My Portfolio</Text>
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
  header: {
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  text: {
    color: Colors.text500,
  },
  portfolioValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
