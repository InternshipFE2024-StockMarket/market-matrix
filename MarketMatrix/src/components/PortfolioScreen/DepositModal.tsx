/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Modal, StyleSheet, TextInput} from 'react-native';
import {Colors} from '../../constants/Colors';
import CustomText from '../UI/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../UI/Button';

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
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={[Colors.background600, Colors.background800]}
          style={styles.modalView}>
          <CustomText style={styles.modalText}>Fund Your Account</CustomText>
          <TextInput
            style={styles.input}
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor={Colors.text500}
          />

          <View style={styles.buttonsContainer}>
            <Button
              style={{
                backgroundColor: Colors.background500,
                flex: 0.3,
                marginRight: 25,
              }}
              onPress={handleAdd}>
              Add
            </Button>
            <Button
              style={{backgroundColor: Colors.pink, marginLeft: 25, flex: 0.3}}
              onPress={handleCancel}>
              Cancel
            </Button>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalView: {
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  input: {
    height: 40,
    marginHorizontal: 10,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 10,
    padding: 10,
    width: 250,
    color: Colors.text500,
  },
  modalText: {
    marginBottom: 5,
    textAlign: 'center',
    color: Colors.text500,
    fontSize: 18,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  errorText: {
    marginBottom: 15,
    textAlign: 'center',
    color: Colors.pink,
    fontSize: 18,
  },
});
