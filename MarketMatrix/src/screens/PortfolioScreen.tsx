import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Colors} from '../constants/Colors';
import GradientBackground from '../components/UI/GradientBackground';
import DynamicTable from '../components/PortfolioScreen/DynamicTable';
import {useUserInvestmentsDetails} from '../utils/functions/getUserInvestmentsDetails';
import Button from '../components/UI/Button';
import {useAuth} from '../contexts/authContext';
import {getTotalPortofolioValue} from '../utils/functions/getTotalPortofolioValue';

const PortfolioScreen = () => {
  const userId = 123456;
  const userInvestmentsDetails = useUserInvestmentsDetails(userId);
  let userPortfolioValue = Number(getTotalPortofolioValue()?.total);
  let plPortfolioValue = Number(getTotalPortofolioValue()?.difference);

  const {logout} = useAuth();

  return (
    <GradientBackground>
      <View style={styles.rootContainer}>
        {/* <View style={styles.header}>
          <View style={styles.portfolioData}>
            <Text style={[styles.text, styles.portfolioValue]}>
              ${userPortfolioValue.toFixed(2)}
            </Text>
            <Text
              style={{
                color: plPortfolioValue > 0 ? Colors.green : Colors.pink,
              }}>
              {plPortfolioValue.toFixed(2)}
            </Text>
          </View>
          <View style={styles.buttonContainer}>
            <Button onPress={logout}>Logout</Button>
          </View>
        </View>
        <Text style={[styles.text, styles.title]}>My Portfolio</Text> */}
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
});
