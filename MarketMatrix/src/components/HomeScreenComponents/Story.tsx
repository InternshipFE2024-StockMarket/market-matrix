/* eslint-disable react/react-in-jsx-scope */
import {View, StyleSheet, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import CustomText from '../UI/CustomText';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';
import {blueColors} from '../../constants/Colors';

interface StoryProps {
  logo: {uri: string};
  title: string;
  value: number;
  percentage: number;
  color: string;
  date?: string;
}

export const Story = ({logo, title, value, percentage, color}: StoryProps) => {
  const {theme} = useThemeContext();
  const {storyStyles} = useThemeColorHook();

  const gradientBase =
    theme === blueColors ? theme.background600 : theme.background800;
  const gradientColors =
    color === 'green'
      ? [theme.greenLowOpacity, gradientBase]
      : [theme.pinkLowOpacity, gradientBase];
  const differenceColor = color === 'green' ? theme.green : theme.pink;
  return (
    <LinearGradient colors={gradientColors}>
      <View style={storyStyles.storyContainer}>
        <Image
          source={logo}
          style={{width: 30, height: 30, alignSelf: 'center'}}
        />
        <CustomText style={storyStyles.title}>{title}</CustomText>
        <CustomText style={[storyStyles.difference, {color: differenceColor}]}>
          {value}
        </CustomText>
        <CustomText style={[storyStyles.difference, {color: differenceColor}]}>
          ({percentage}%)
        </CustomText>
      </View>
    </LinearGradient>
  );
};
