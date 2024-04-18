import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {Colors} from '../../constants/Colors';
import {Investment} from '../../constants/Interfaces';
import {addNewStockForUser} from '../../utils/http/addNewStockForUser';
import {fetchUserData} from '../../utils/http/fetchUserData';
import {updateUserAvailableAmount} from '../../utils/http/updateUserAvailableAmount';
import {useAuth} from '../../contexts/authContext';
import {getUserAvailableAmount} from '../../utils/functions/getUserAvailableAmount';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../UI/Button';

interface BuyModalProp {
  isVisible: boolean;
  closeModal: () => void;
  stockId: string | undefined;
  stockTicker: string | undefined;
  boughtPrice: number | undefined;
}

export const BuyModal = ({
  isVisible,
  closeModal,
  stockId,
  stockTicker,
  boughtPrice,
}: BuyModalProp) => {
  const userCtx = useAuth();
  const [amount, setAmount] = useState('');
  const [errorText, setErrorText] = useState('');

  const userId = userCtx.userId;
  const userInvestments = fetchUserData(userId)?.investment;
  const stockIds = userInvestments?.map(investment => investment.id);
  const availableAmount = getUserAvailableAmount(userId);

  const handleBuy = () => {
    setErrorText('');
    if (amount === '') {
      setErrorText('Amount can not be empty!');
    } else if (availableAmount && availableAmount < parseFloat(amount)) {
      setErrorText('Insufficient funds!');
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

          updateUserAvailableAmount(parseFloat(amount), userId);
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
      <View style={styles.modalContainer}>
        <LinearGradient
          colors={[Colors.background600, Colors.background800]}
          style={styles.modalView}>
          <Text style={styles.modalText}>Available: {availableAmount}$</Text>
          <TextInput
            style={styles.input}
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor={Colors.text500}
          />

          {errorText && <Text style={styles.errorText}>{errorText}</Text>}
          <View style={styles.buttonsContainer}>
            <Button
              style={{
                backgroundColor: Colors.background500,
                flex: 0.3,
                marginRight: 25,
              }}
              onPress={handleBuy}>
              Buy
            </Button>
            <Button
              style={{backgroundColor: Colors.pink, marginLeft: 25, flex: 0.3}}
              onPress={closeModal}>
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
