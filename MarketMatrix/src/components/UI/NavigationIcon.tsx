import {View, Image, StyleSheet} from 'react-native';
import React from 'react';
import {useThemeContext} from '../../contexts/themeContext';

interface IconProps {
  focused?: boolean;
  source: number;
  color: string;
  size: number;
}

export const NavigationIcon = ({focused, source, color, size}: IconProps) => {
  const {theme} = useThemeContext();

  const navigationIconstyles = StyleSheet.create({
    icon: {
      width: size,
      height: size,
      tintColor: focused ? theme.selectedIcon : theme.text500,
    },
  });
  return (
    <View>
      <Image
        source={source}
        style={navigationIconstyles.icon}
        tintColor={color}
      />
    </View>
  );
};
