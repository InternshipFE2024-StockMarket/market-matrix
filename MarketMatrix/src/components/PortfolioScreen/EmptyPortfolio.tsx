import {Dimensions, Image, StyleSheet, View} from 'react-native';
import React from 'react';
import CustomText from '../UI/CustomText';
import {Colors} from '../../constants/Colors';

const EmptyPortfolio = () => {
  return (
    <View style={styles.newAccountContainer}>
      <Image
        source={require('../../assets/icons/portfolio.png')}
        style={styles.emptyPortfolioImage}
      />
      <CustomText style={styles.emptyPortfolioText}>
        Your portfolio is empty
      </CustomText>
      <View style={styles.instructionsContainer}>
        <CustomText style={styles.instructionsText}>
          Start exploring investment opportunities by copying people and
          investing in markets.
        </CustomText>
      </View>
    </View>
  );
};

export default EmptyPortfolio;

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  newAccountContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyPortfolioImage: {
    width: deviceWidth * 0.2,
    height: deviceWidth * 0.2,
    marginBottom: 20,
  },
  emptyPortfolioText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.text500,
  },
  instructionsContainer: {
    width: 0.6 * deviceWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  instructionsText: {
    textAlign: 'center',
    color: Colors.text500,
  },
});
