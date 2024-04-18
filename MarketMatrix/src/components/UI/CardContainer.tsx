import {View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {useThemeContext} from '../../contexts/themeContext';
import {useThemeColorHook} from '../../utils/useThemeColorHook';

interface CardContainerProps {
  children: React.ReactNode;
}

const CardContainer = ({children}: CardContainerProps) => {
  const {theme} = useThemeContext();
  const {cardContainerStyles} = useThemeColorHook();
  return (
    <LinearGradient
      colors={[theme.cardBackground500, theme.background600]}
      locations={[0, 0.8]}
      start={{x: 0.5, y: 0}}
      end={{x: 0.5, y: 1}}
      style={cardContainerStyles.container}>
      <View>{children}</View>
    </LinearGradient>
  );
};

export default CardContainer;
