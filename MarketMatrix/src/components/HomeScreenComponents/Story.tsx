/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Image} from 'react-native';
import {Colors} from '../../constants/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../UI/CustomText';

interface StoryProps {
  logo: {uri: string};
  title: string;
  value: number;
  percentage: number;
  color: string;
  date?: string;
}

export const Story = ({logo, title, value, percentage, color}: StoryProps) => {
  const gradientColors =
    color === 'green'
      ? ['rgba(38, 209, 123, 0.50)', Colors.background600]
      : ['rgba(235, 19, 123, 0.5)', Colors.background600];
  const differenceColor = color === 'green' ? Colors.green : Colors.pink;
  return (
    <LinearGradient colors={gradientColors}>
      <View style={styles.storyContainer}>
        <Image
          source={logo}
          style={{width: 30, height: 30, alignSelf: 'center'}}
        />
        <CustomText style={styles.title}>{title}</CustomText>
        <CustomText style={[styles.difference, {color: differenceColor}]}>
          {value}
        </CustomText>
        <CustomText style={[styles.difference, {color: differenceColor}]}>
          ({percentage}%)
        </CustomText>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  storyContainer: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    width: 70,
  },
  title: {
    color: Colors.text500,
    fontSize: 12,
    marginBottom: 5,
  },
  difference: {
    fontSize: 14,
  },
});
