import {useState} from 'react';
import {Switch, View} from 'react-native';
import {useThemeContext} from '../../contexts/themeContext';

interface ThemeToggleSwitch {
  isEnabled: boolean;
  toggleSwitch: () => void;
}

export const ThemeToggle = ({isEnabled, toggleSwitch}: ThemeToggleSwitch) => {
  const {theme} = useThemeContext();

  return (
    <View>
      <Switch
        trackColor={{false: '#445494', true: '#445494'}}
        thumbColor={theme.text500}
        ios_backgroundColor="#2A9D87"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
};
