import {Image, View} from 'react-native';
import React from 'react';
import CustomText from '../UI/CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

const EmptyPortfolio = () => {
  const {emptyPortfolio} = useThemeColorHook();

  return (
    <View style={emptyPortfolio.newAccountContainer}>
      <Image
        source={require('../../assets/icons/portfolio.png')}
        style={emptyPortfolio.emptyPortfolioImage}
      />
      <CustomText style={emptyPortfolio.emptyPortfolioText}>
        Your portfolio is empty
      </CustomText>
      <View style={emptyPortfolio.instructionsContainer}>
        <CustomText style={emptyPortfolio.instructionsText}>
          Start exploring investment opportunities by copying people and
          investing in markets.
        </CustomText>
      </View>
    </View>
  );
};

export default EmptyPortfolio;
