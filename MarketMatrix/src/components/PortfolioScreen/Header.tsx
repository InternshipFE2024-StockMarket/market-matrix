import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Button from '../UI/Button';
import {getTotalPortofolioValue} from '../../utils/functions/getTotalPortofolioValue';
import {Colors} from '../../constants/Colors';
import {useAuth} from '../../contexts/authContext';

const Header = () => {
  let userPortfolioValue = Number(getTotalPortofolioValue()?.total);
  let plPortfolioValue = Number(getTotalPortofolioValue()?.difference);

  const {logout} = useAuth();
  return (
    <SafeAreaView>
      <View style={styles.header}>
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
      <Text style={[styles.text, styles.title]}>My Portfolio</Text>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  portfolioData: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    position: 'absolute',
    right: 0,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
  },
  text: {
    color: Colors.text500,
  },
  portfolioValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
