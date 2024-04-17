/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Modal, StyleSheet, Image, Pressable} from 'react-native';
import {Colors} from '../../constants/Colors';
import Button from '../UI/Button';
import CustomText from '../UI/CustomText';

interface ModalProps {
  showModal: boolean;
  closeModal: () => void;
  date?: string;
  title: string;
  logo?: {uri: string};
  totalDifference: number;
  percentage: number;
  navigateToCompany: (id: string) => void;
  id: string;
}

export const StoryModal = ({
  showModal,
  closeModal,
  date,
  title,
  logo,
  totalDifference,
  percentage,
  navigateToCompany,
  id,
}: ModalProps) => {
  return (
    <Modal transparent={true} visible={showModal} animationType="fade">
      <View style={styles.modalBackround}>
        <View style={styles.modal}>
          <Pressable style={{alignItems: 'flex-end'}} onPress={closeModal}>
            <CustomText style={styles.closeIcon}>X</CustomText>
          </Pressable>

          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Image
                source={logo}
                style={{width: 50, height: 50, alignSelf: 'center'}}
              />
              <CustomText style={styles.title}>{title}</CustomText>
            </View>

            <CustomText style={styles.date}>{date}</CustomText>

            <CustomText
              style={{
                fontSize: 20,
                color: totalDifference >= 0 ? Colors.green : Colors.pink,
                marginBottom: 10,
              }}>
              {totalDifference} ({percentage}%)
            </CustomText>

            <Button onPress={() => navigateToCompany(id)}>Go to company</Button>
          </View>
        </View>
      </View>
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
  modalHeader: {
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 30,
  },
  modalContent: {
    gap: 5,
    alignItems: 'center',
  },
  closeIcon: {
    color: Colors.text500,
    fontSize: 16,
  },
  title: {
    color: Colors.text500,
    fontSize: 20,
  },
  date: {
    color: Colors.text500,
    fontSize: 16,
  },
});
