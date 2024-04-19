import {View} from 'react-native';
import React from 'react';
import Button from '../UI/Button';
import CustomText from '../UI/CustomText';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface DepositContainerProps {
  setShowModal: any;
  availableAmount: number;
}

const DepositContainer = ({
  setShowModal,
  availableAmount,
}: DepositContainerProps) => {
  const {depositContainer} = useThemeColorHook();
  return (
    <View style={depositContainer.container}>
      <View style={depositContainer.leftContainer}>
        <CustomText style={depositContainer.cash}>Cash Available</CustomText>
        <CustomText style={depositContainer.cashValue}>
          $ {availableAmount}
        </CustomText>
      </View>
      <View style={depositContainer.rightCintainer}>
        <Button onPress={() => setShowModal(true)}>Deposit</Button>
      </View>
    </View>
  );
};

export default DepositContainer;
