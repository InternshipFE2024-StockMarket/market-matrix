import React from 'react';
import {
  View,
  Modal,
  Text,
  Button,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import {Colors} from '../../constants/Colors';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
}

export const StoryModal = ({showModal, closeModal}: ModalProps) => {
  return (
    <Modal transparent={true} visible={showModal} animationType="fade">
      <TouchableOpacity
        activeOpacity={1}
        style={styles.modalBackround}
        onPress={closeModal}>
        <View style={styles.modal}>
          <Text style={styles.text}>22.10.2024</Text>
          <Image source={require('../../assets/icons/icon-apple.png')} />
          <Text style={styles.text}>Apple</Text>
          {/* <Text style={{color: 'red', fontSize: 20}}>Hello</Text>
          <Button title="Close" onPress={closeModal} /> */}
        </View>
      </TouchableOpacity>
    </Modal>
  );
};

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
  },
  text: {
    color: 'white',
  },
});
