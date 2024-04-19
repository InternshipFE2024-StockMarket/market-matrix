/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Modal, Image, Pressable} from 'react-native';
import Button from '../UI/Button';
import CustomText from '../UI/CustomText';
import LinearGradient from 'react-native-linear-gradient';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

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
  const {theme} = useThemeContext();
  const {storyModalStyles} = useThemeColorHook();

  return (
    <Modal transparent={true} visible={showModal} animationType="fade">
      <View style={storyModalStyles.modalBackround}>
        <LinearGradient
          colors={[theme.background600, theme.background800]}
          style={storyModalStyles.modal}>
          <Pressable style={{alignItems: 'flex-end'}} onPress={closeModal}>
            <CustomText style={storyModalStyles.closeIcon}>X</CustomText>
          </Pressable>

          <View style={storyModalStyles.modalContent}>
            <View style={storyModalStyles.modalHeader}>
              <Image
                source={logo}
                style={{width: 50, height: 50, alignSelf: 'center'}}
              />
              <CustomText style={storyModalStyles.title}>{title}</CustomText>
            </View>

            <CustomText style={storyModalStyles.date}>{date}</CustomText>

            <CustomText
              style={{
                fontSize: 20,
                color: totalDifference >= 0 ? theme.green : theme.pink,
                marginBottom: 10,
              }}>
              {totalDifference} ({percentage}%)
            </CustomText>

            <Button onPress={() => navigateToCompany(id)}>Go to company</Button>
          </View>
        </LinearGradient>
      </View>
    </Modal>
  );
};
