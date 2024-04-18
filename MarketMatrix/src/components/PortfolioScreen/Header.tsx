import React from 'react';
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  View,
  useWindowDimensions,
} from 'react-native';
import Button from '../UI/Button';
import {useTotalPortofolioValue} from '../../utils/functions/getTotalPortofolioValue';
import {Colors} from '../../constants/Colors';
import {useAuth} from '../../contexts/authContext';
import CustomText from '../UI/CustomText';

const Header = () => {
  const userCtx = useAuth();
  const userId = userCtx.userId;
  let userPortfolioValue = Number(useTotalPortofolioValue(userId)?.total);
  let plPortfolioValue = Number(useTotalPortofolioValue(userId)?.difference);
  const {width, height} = useWindowDimensions();
  const isLandscape = width > height;
  const {logout} = useAuth();

  let content = (
    <>
      <View style={styles.header}>
        <View style={styles.portfolioData}>
          <CustomText style={[styles.text, styles.portfolioValue]}>
            ${userPortfolioValue.toFixed(2)}
          </CustomText>
          <CustomText
            style={{
              color: plPortfolioValue > 0 ? Colors.green : Colors.pink,
            }}>
            {plPortfolioValue.toFixed(2)}
          </CustomText>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable onPress={logout}>
            <Image
              style={styles.image}
              source={require('../../assets/icons/logout.png')}
            />
          </Pressable>
        </View>
      </View>
      <CustomText style={[styles.text, styles.title]}>My Portfolio</CustomText>
    </>
  );
  if (isLandscape) {
    content = (
      <>
        <View style={styles.landscapeHeader}>
          <CustomText style={[styles.text, styles.landscapeTitle]}>
            My Portfolio
          </CustomText>
          <View>
            <CustomText style={[styles.text, styles.portfolioValue]}>
              ${userPortfolioValue.toFixed(2)}
            </CustomText>
            <CustomText
              style={{
                color: plPortfolioValue > 0 ? Colors.green : Colors.pink,
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

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 20,
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
    // fontWeight: 'bold',
    marginVertical: 20,
    marginLeft: 10,
    // fontFamily: 'Roboto',
  },
  landscapeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  text: {
    color: Colors.text500,
    // fontFamily: 'Roboto',
  },
  portfolioValue: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  image: {
    width: 20,
    height: 20,
  },
});
