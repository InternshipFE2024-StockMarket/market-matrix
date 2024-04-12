import {SetStateAction, useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {SelectList} from 'react-native-dropdown-select-list';
import {Colors} from '../../constants/Colors';

const data = [
  {key: '1', value: 'EUR'},
  {key: '2', value: 'USD'},
];

export const CurrencyDropdown = () => {
  const [selected, setSelected] = useState('EUR');

  return (
    <View style={styles.dropdown}>
      <SelectList
        data={data}
        setSelected={setSelected}
        boxStyles={{
          borderColor: Colors.dropdown,
          borderWidth: 2,
          borderRadius: 30,
          width: 80,
          height: 40,
        }}
        dropdownStyles={{borderColor: Colors.text500, width: 80, height: 80}}
        dropdownTextStyles={{color: Colors.text500, fontSize: 12}}
        inputStyles={{color: Colors.text500, fontSize: 12}}
        placeholder={selected}
        arrowicon={
          <Image
            source={require('../../assets/icons/icon-chevron-down.png')}
            style={{width: 15, height: 15, alignSelf: 'center'}}
          />
        }
        closeicon={<Text style={{color: Colors.text500, fontSize: 13}}>X</Text>}
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

const styles = StyleSheet.create({
  dropdown: {},
});
