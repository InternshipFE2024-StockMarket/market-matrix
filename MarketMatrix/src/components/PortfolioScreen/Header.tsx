import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  View,
  useWindowDimensions,
} from 'react-native';
import Button from '../UI/Button';
import {getTotalPortofolioValue} from '../../utils/functions/getTotalPortofolioValue';
import {useAuth} from '../../contexts/authContext';
import CustomText from '../UI/CustomText';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

const Header = () => {
  const {theme} = useThemeContext();
  const {headerStyles} = useThemeColorHook();
  const userCtx = useAuth();
  const userId = userCtx.userId;
  let userPortfolioValue = Number(getTotalPortofolioValue(userId)?.total);
  let plPortfolioValue = Number(getTotalPortofolioValue(userId)?.difference);
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const {logout} = useAuth();

  let content = (
    <>
      <View style={headerStyles.header}>
        <View style={headerStyles.portfolioData}>
          <CustomText style={[headerStyles.text, headerStyles.portfolioValue]}>
            ${userPortfolioValue.toFixed(2)}
          </CustomText>
          <CustomText
            style={{
              color: plPortfolioValue > 0 ? theme.green : theme.pink,
            }}>
            {plPortfolioValue.toFixed(2)}
          </CustomText>
        </View>
        <View style={headerStyles.buttonContainer}>
          <Pressable onPress={logout}>
            <Image
              style={headerStyles.image}
              source={require('../../assets/icons/logout.png')}
            />
          </Pressable>
        </View>
      </View>
      <CustomText style={[headerStyles.text, headerStyles.title]}>
        My Portfolio
      </CustomText>
    </>
  );
  if (isLandscape) {
    content = (
      <>
        <View style={headerStyles.landscapeHeader}>
          <CustomText style={[headerStyles.text, headerStyles.landscapeTitle]}>
            My Portfolio
          </CustomText>
          <View>
            <CustomText
              style={[headerStyles.text, headerStyles.portfolioValue]}>
              ${userPortfolioValue.toFixed(2)}
            </CustomText>
            <CustomText
              style={{
                color: plPortfolioValue > 0 ? theme.green : theme.pink,
              }}>
              {plPortfolioValue.toFixed(2)}
            </CustomText>
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
