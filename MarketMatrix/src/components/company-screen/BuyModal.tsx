import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../constants/Colors';

interface BuyModalProp {
  isVisible: boolean;
  closeModal: () => void;
  availableAmount: number | undefined;
}

export const BuyModal = ({
  isVisible,
  closeModal,
  availableAmount,
}: BuyModalProp) => {
  const [amount, setAmount] = useState('');

  const handleBuy = () => {
    console.log('Buy:', amount);
    closeModal();
  };

  if (!isVisible) return null;

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={isVisible}
      onRequestClose={closeModal}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
            placeholder="Enter amount"
          />
          <Text style={styles.modalText}>Available: {availableAmount}$</Text>
          <Button title="Buy" onPress={handleBuy} />
          <Button title="Cancel" color="#FF6347" onPress={closeModal} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 200,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
