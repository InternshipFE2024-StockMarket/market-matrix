/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Modal, StyleSheet, Pressable, Dimensions} from 'react-native';
import {Colors} from '../../constants/Colors';
import CustomText from '../UI/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import Input from '../AuthScreens/Input';
import Button from '../UI/Button';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  handleDeposit: () => void;
}

export const DepositModal = ({
  showModal,
  closeModal,
  handleDeposit,
}: ModalProps) => {
  const [input, setInput] = useState();
  
  return (
    <Modal transparent={true} visible={showModal} animationType="fade">
      <View style={styles.modalBackround}>
        <LinearGradient
          colors={[Colors.background600, Colors.background800]}
          style={styles.modal}>
          <Pressable style={{alignItems: 'flex-end'}} onPress={closeModal}>
            <CustomText style={styles.closeIcon}>X</CustomText>
          </Pressable>
          <View style={styles.modalContent}>
            <Input label="Fund Your Account" />
            <Button onPress={handleDeposit}>Deposit</Button>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  modalBackround: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
  },
  modal: {
    backgroundColor: Colors.background600,
    padding: 20,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3.84,
    width: 0.6 * deviceWidth,
    height: 0.3 * deviceHeight,
    justifyContent: 'center',
  },
  modalHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  modalContent: {
    marginBottom: 50,
    justifyContent: 'center',
  },
  closeIcon: {
    color: Colors.text500,
    fontSize: 16,
  },
});
