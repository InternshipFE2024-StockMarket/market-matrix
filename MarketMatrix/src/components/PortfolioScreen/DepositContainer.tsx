import {StyleSheet, View, Dimensions} from 'react-native';
import React from 'react';
import {Colors} from '../../constants/Colors';
import Button from '../UI/Button';
import CustomText from '../UI/CustomText';

interface DepositContainerProps {
  setShowModal: any;
}

const DepositContainer = ({setShowModal}: DepositContainerProps) => {
  const availableCash = 40;

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <CustomText style={styles.cash}>Cash Available</CustomText>
        <CustomText style={styles.cashValue}>$ {availableCash}</CustomText>
      </View>
      <View style={styles.rightCintainer}>
        <Button onPress={() => setShowModal(true)}>Deposit</Button>
      </View>
    </View>
  );
};

export default DepositContainer;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0.08 * deviceHeight,
    position: 'absolute',
    bottom: 0,
    backgroundColor: Colors.background600,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  leftContainer: {
    marginLeft: 20,
  },
  rightCintainer: {
    marginRight: 20,
  },
  cash: {
    color: Colors.text500,
    fontSize: 18,
  },
  cashValue: {
    color: Colors.text500,
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 5,
  },
});
