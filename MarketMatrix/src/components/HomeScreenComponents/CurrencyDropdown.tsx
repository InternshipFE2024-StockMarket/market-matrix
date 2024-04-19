/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/react-in-jsx-scope */
import {SetStateAction} from 'react';
import {Image, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import CustomText from '../UI/CustomText';
import {useThemeContext} from '../../contexts/themeContext';

const data = [
  {key: 'EUR', value: 'EUR'},
  {key: 'USD', value: 'USD'},
];

interface CurrencyDropdownProps {
  selected: string;
  setSelected: React.Dispatch<SetStateAction<string>>;
}

export const CurrencyDropdown = ({
  selected,
  setSelected,
}: CurrencyDropdownProps) => {
  const {theme} = useThemeContext();

  return (
    <View>
      <SelectList
        data={data}
        setSelected={setSelected}
        boxStyles={{
          borderColor: theme.dropdown,
          borderWidth: 2,
          borderRadius: 30,
          width: 80,
          height: 40,
        }}
        dropdownStyles={{borderColor: theme.text500, width: 80, height: 80}}
        dropdownTextStyles={{color: theme.text500, fontSize: 12}}
        inputStyles={{color: theme.text500, fontSize: 12}}
        placeholder={selected}
        arrowicon={
          <Image
            source={require('../../assets/icons/icon-chevron-down.png')}
            style={{width: 15, height: 15, alignSelf: 'center'}}
          />
        }
        closeicon={
          <CustomText style={{color: theme.text500, fontSize: 13}}>
            X
          </CustomText>
        }
        searchicon={
          <Image
            source={require('../../assets/icons/icon-search.png')}
            style={{width: 15, height: 15, alignSelf: 'center'}}
          />
        }
        searchPlaceholder=""
      />
    </View>
  );
};
