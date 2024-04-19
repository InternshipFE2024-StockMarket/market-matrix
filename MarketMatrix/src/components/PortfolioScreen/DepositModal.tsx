/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Modal, TextInput} from 'react-native';
import CustomText from '../UI/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../UI/Button';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  handleDeposit: (amount: number) => void;
}

export const DepositModal = ({
  showModal,
  closeModal,
  handleDeposit,
}: ModalProps) => {
  const [amount, setAmount] = useState('');
  const {theme} = useThemeContext();
  const {DepositModal} = useThemeColorHook();

  const handleAdd = () => {
    handleDeposit(parseFloat(amount));
    closeModal();
    setAmount('');
  };

  const handleCancel = () => {
    closeModal();
    setAmount('');
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={showModal}
      onRequestClose={closeModal}>
      <View style={DepositModal.modalContainer}>
        <LinearGradient
          colors={[theme.background600, theme.background800]}
          style={DepositModal.modalView}>
          <CustomText style={DepositModal.modalText}>
            Fund Your Account
          </CustomText>
          <TextInput
            style={DepositModal.input}
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor={theme.text500}
          />

          <View style={DepositModal.buttonsContainer}>
            <Button
              style={{
                backgroundColor: theme.background500,
                flex: 0.3,
                marginRight: 25,
              }}
              onPress={handleAdd}>
              Add
            </Button>
            <Button
              style={{backgroundColor: theme.pink, marginLeft: 25, flex: 0.3}}
              onPress={handleCancel}>
              Cancel
            </Button>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
