import React, {useState} from 'react';
import {Button, Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {Investment} from '../../constants/Interfaces';
import {addNewStockForUser} from '../../utils/http/addNewStockForUser';
import {fetchUserData} from '../../utils/http/fetchUserData';

interface BuyModalProp {
  isVisible: boolean;
  closeModal: () => void;
  availableAmount: number | undefined;
  stockId: string | undefined;
  stockTicker: string | undefined;
  boughtPrice: number | undefined;
  userId: string;
}

export const BuyModal = ({
  isVisible,
  closeModal,
  availableAmount,
  stockId,
  stockTicker,
  boughtPrice,
  userId,
}: BuyModalProp) => {
  const [amount, setAmount] = useState('');
  const [errorText, setErrorText] = useState('');

  const userInvestments = fetchUserData(userId)?.investment;

  const stockIds = userInvestments?.map(investment => investment.id);

  const handleBuy = () => {
    setErrorText('');
    if (amount === '') {
      setErrorText('Amount can not be empty!');
    } else {
      if (!stockIds?.includes(stockId || '')) {
        if (amount && boughtPrice) {
          const share = (parseFloat(amount) / boughtPrice).toFixed(2);

          const investment: Investment = {
            id: stockId ?? 'default-id',
            ticker: stockTicker ?? 'default-ticker',
            amount: parseFloat(amount),
            boughtPrice: boughtPrice ?? 0,
            shares: parseFloat(share),
          };

          addNewStockForUser(userId, investment)
            .then(() => {
              closeModal();
            })
            .catch(error => {
              console.error('Failed to add new stock for user:', error);
            });
        }
      } else setErrorText('Stock already in portofolio!');
    }
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
          {errorText && <Text>{errorText}</Text>}
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
