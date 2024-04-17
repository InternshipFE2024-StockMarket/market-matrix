import React from 'react';
import {
  View,
  Modal,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Pressable,
  ImageSourcePropType,
} from 'react-native';
import {Colors} from '../../constants/Colors';
import Button from '../UI/Button';

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
            <Text style={styles.closeIcon}>X</Text>
          </Pressable>

          <View style={styles.modalContent}>
            <View style={styles.modalHeader}>
              <Image
                source={logo}
                style={{width: 50, height: 50, alignSelf: 'center'}}
              />
              <Text style={styles.title}>{title}</Text>
            </View>

            {/* <View
              style={{
                backgroundColor: 'white',
                width: 300,
                height: 200,
              }}></View> */}

            <Text style={styles.date}>{date}</Text>

            <Text
              style={{
                fontSize: 20,
                color: totalDifference >= 0 ? Colors.green : Colors.pink,
                marginBottom: 10,
              }}>
              {totalDifference} ({percentage}%)
            </Text>

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
