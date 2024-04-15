import {Image, Pressable, StyleSheet, Text, ViewStyle} from 'react-native';

const backIcon = require('../../assets/icons/icon-back.png');

interface BackButtonProp {
  onPress: () => void;
  text: string;
  style: ViewStyle;
}

export const BackButton = ({onPress, text, style}: BackButtonProp) => {
  return (
    <Pressable onPress={onPress} style={[styles.button, style]}>
      <Image source={backIcon} style={styles.icon} />
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '15%',
  },
  text: {
    color: 'white',
    fontSize: 16,
    marginLeft: 5,
  },
  icon: {
    width: 20,
    height: 20,
  },
});
