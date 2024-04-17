import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import Button from '../UI/Button';
import {getTotalPortofolioValue} from '../../utils/functions/getTotalPortofolioValue';
import {Colors} from '../../constants/Colors';
import {useAuth} from '../../contexts/authContext';

const Header = () => {
  let userPortfolioValue = Number(getTotalPortofolioValue()?.total);
  let plPortfolioValue = Number(getTotalPortofolioValue()?.difference);
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const {logout} = useAuth();

  let content = (
    <>
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
    </>
  );
  if (isLandscape) {
    content = (
      <>
        <View style={styles.landscapeHeader}>
          <Text style={[styles.text, styles.landscapeTitle]}>My Portfolio</Text>
          <View>
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
          <View>
            <Button onPress={logout}>Logout</Button>
          </View>
        </View>
      </>
    );
  }

  return <SafeAreaView>{content}</SafeAreaView>;
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
  },
  landscapeHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 5,
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
  landscapeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.text500,
  },
  portfolioValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
});
