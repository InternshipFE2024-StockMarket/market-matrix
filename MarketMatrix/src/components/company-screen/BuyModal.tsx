import React, {useState} from 'react';
import {Modal, StyleSheet, Text, TextInput, View} from 'react-native';
import {Investment} from '../../constants/Interfaces';
import {addNewStockForUser} from '../../utils/http/addNewStockForUser';
import {fetchUserData} from '../../utils/http/fetchUserData';
import {updateUserAvailableAmount} from '../../utils/http/updateUserAvailableAmount';
import {useAuth} from '../../contexts/authContext';
import {getUserAvailableAmount} from '../../utils/functions/getUserAvailableAmount';
import LinearGradient from 'react-native-linear-gradient';
import Button from '../UI/Button';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

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

  const {theme} = useThemeContext();
  const {buyModalStyles} = useThemeColorHook();

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
      <View style={buyModalStyles.modalContainer}>
        <LinearGradient
          colors={[theme.background600, theme.background800]}
          style={buyModalStyles.modalView}>
          <Text style={buyModalStyles.modalText}>
            Available: {availableAmount}$
          </Text>
          <TextInput
            style={buyModalStyles.input}
            onChangeText={setAmount}
            value={amount}
            keyboardType="numeric"
            placeholder="Enter amount"
            placeholderTextColor={theme.text500}
          />

          {errorText && (
            <Text style={buyModalStyles.errorText}>{errorText}</Text>
          )}
          <View style={buyModalStyles.buttonsContainer}>
            <Button
              style={{
                backgroundColor: theme.background500,
                flex: 0.3,
                marginRight: 25,
              }}
              onPress={handleBuy}>
              Buy
            </Button>
            <Button
              style={{backgroundColor: theme.pink, marginLeft: 25, flex: 0.3}}
              onPress={closeModal}>
              Cancel
            </Button>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
