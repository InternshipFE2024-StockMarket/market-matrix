import {StyleSheet} from 'react-native';
import {useThemeContext} from '../contexts/themeContext';

export const useThemeColorHook = () => {
  const {theme} = useThemeContext();

  const homePageStyles = StyleSheet.create({
    homeWrapper: {
      padding: 20,
    },
    title: {
      color: theme.text500,
      fontSize: 20,
      alignSelf: 'center',
    },

    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginVertical: 40,
      position: 'relative',
    },
    text: {
      color: theme.text500,
      fontSize: 16,
    },
    valueContainer: {
      flexDirection: 'row',
      alignItems: 'baseline',
    },
    currency: {
      color: theme.text500,
      fontSize: 32,
    },
    value: {
      color: theme.text500,
      fontSize: 44,
    },
    storiesContaner: {
      flexDirection: 'row',
      gap: 8,
      alignItems: 'center',
    },
    dropdown: {
      position: 'absolute',
    },
    chart: {
      width: '100%',
      height: '55%',
    },
    topHeader: {
      justifyContent: 'center',
    },
    buttonContainer: {
      position: 'absolute',
      right: 0,
    },
    image: {
      width: 20,
      height: 20,
    },
  });

  const chartConfigurationStyles = StyleSheet.create({
    container: {
      flex: 1,
      margin: 0,
      backgroundColor: theme.background600,
    },
    textContainer: {
      justifyContent: 'center',
      alignContent: 'center',
      flex: 1,
    },
    text: {
      color: theme.text500,
      fontSize: 20,
      alignSelf: 'center',
    },
    loader: {
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.background600,
      flex: 1,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
    },
  });

  const authStyles = StyleSheet.create({
    formContainer: {
      flex: 1,
      marginTop: 80,
    },
    title: {
      fontSize: 24,
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.text500,
      marginBottom: 20,
    },
    or: {
      color: theme.text500,
      textAlign: 'center',
      marginVertical: 5,
    },
    buttonContainer: {
      marginHorizontal: 20,
    },
  });
  const inputStyles = StyleSheet.create({
    inputContainer: {
      marginVertical: 8,
    },
    label: {
      color: 'white',
      marginBottom: 4,
      fontWeight: '600',
    },
    labelInvalid: {
      color: theme.pink,
    },
    input: {
      paddingVertical: 8,
      paddingHorizontal: 6,
      backgroundColor: theme.background500,
      borderRadius: 10,
      fontSize: 16,
      color: theme.text500,
    },
    inputInvalid: {
      backgroundColor: theme.pink,
    },
  });

  const stockDetailsStyles = StyleSheet.create({
    companyDetaildContainer: {
      margin: '3%',
      height: '30%',
      flex: 0.55,
    },
    upperView: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 20,
    },
    mainDetails: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      flex: 1,
    },
    companyImage: {
      width: 80,
      height: 80,
      borderRadius: 15,
      marginRight: 10,
    },
    companyName: {
      color: theme.text500,
      fontSize: 24,
      marginBottom: 10,
    },
    compantIndex: {
      color: theme.text500,
      fontSize: 14,
    },
    companyCapital: {
      color: theme.text500,
      fontSize: 32,
      marginBottom: 2,
    },
    marketText: {
      color: theme.text500,
      fontSize: 12,
    },
    secondaryDetails: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
    },
    detailColumn: {
      flex: 0.8,
      paddingRight: 10,
    },
    priceColumn: {
      flex: 0.6,
      alignItems: 'flex-end',
    },
    detailsText: {
      color: theme.text500,
      fontSize: 16,
      marginVertical: 5,
    },
    priceValue: {
      color: theme.text500,
      fontSize: 28,
      marginBottom: 2,
    },
    fluctuationText: {
      flexDirection: 'row',
    },
  });

  const assetItemStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    leftContainer: {
      flex: 1,
      gap: 5,
    },
    rightContainer: {
      alignItems: 'flex-end',
      gap: 6,
    },
    titleContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 3,
      color: theme.text500,
    },
    ticker: {
      fontSize: 18,
      fontWeight: 'bold',
      color: theme.text500,
    },
    name: {
      fontSize: 16,
      color: theme.text500,
    },
    icon: {
      width: 18,
      height: 18,
      tintColor: theme.text500,
    },
    price: {
      fontFamily: 'monospace',
      fontSize: 14,
      color: theme.text500,
    },
    image: {
      width: 30,
      height: 30,
      marginRight: 5,
    },
  });

  const searchHeaderStyles = StyleSheet.create({
    container: {
      backgroundColor: theme.background500,
    },
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 5,
    },
    input: {
      height: 45,
      paddingHorizontal: 10,
      fontSize: 16,
    },
  });

  const searchInputStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      position: 'relative',
    },
    input: {
      backgroundColor: theme.background600,
      width: '90%',
      height: 60,
      borderRadius: 10,
      color: theme.text500,
    },
    search: {
      width: 24,
      height: 24,
      position: 'absolute',
      right: 60,
    },
    landscapeSearch: {
      width: 24,
      height: 24,
      position: 'absolute',
      right: 100,
    },
    image: {
      width: '100%',
      height: '100%',
    },
    buttonContainer: {
      position: 'absolute',
      right: 30,
      zIndex: 1,
    },
    landscapeButtonContainer: {
      position: 'absolute',
      right: 60,
      zIndex: 1,
    },
    imageLogout: {
      width: 20,
      height: 20,
    },
  });
  const storyStyles = StyleSheet.create({
    storyContainer: {
      padding: 5,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      width: 70,
    },
    title: {
      color: theme.text500,
      fontSize: 12,
      marginBottom: 5,
    },
    difference: {
      fontSize: 14,
    },
  });

  const storyModalStyles = StyleSheet.create({
    modalBackround: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.75)',
    },
    modal: {
      backgroundColor: theme.background600,
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
      color: theme.text500,
      fontSize: 16,
    },
    title: {
      color: theme.text500,
      fontSize: 20,
    },
    date: {
      color: theme.text500,
      fontSize: 16,
    },
  });

  const assetsCellStyles = StyleSheet.create({
    container: {
      flexDirection: 'row',
    },
    imageContainer: {
      width: 30,
      height: 30,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: 5,
    },
    image: {
      width: '90%',
      height: '90%',
    },
    ticker: {
      color: theme.text500,
      fontWeight: 'bold',
      fontSize: 18,
    },
    price: {
      color: theme.text500,
      fontSize: 14,
    },
  });

  const dynamicTableStyles = StyleSheet.create({
    rootContainer: {
      flex: 1,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      marginHorizontal: 5,
    },
    landscapeHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 20,
      marginHorizontal: 5,
    },
    headerContainer: {
      backgroundColor: theme.cardBackground500,
    },
    headerText: {
      flex: 1,
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
      color: theme.text500,
    },
  });

  const headerStyles = StyleSheet.create({
    header: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginHorizontal: 10,
      marginBottom: 20,
      marginTop: 20,
    },
    landscapeHeader: {
      justifyContent: 'space-between',
      flexDirection: 'row',
      marginTop: 5,
    },
    portfolioData: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      position: 'absolute',
      right: 0,
    },
    title: {
      fontSize: 24,
      marginVertical: 20,
      marginLeft: 10,
    },
    landscapeTitle: {
      fontSize: 24,
      fontWeight: 'bold',
    },
    text: {
      color: theme.text500,
    },
    portfolioValue: {
      fontWeight: 'bold',
      fontSize: 16,
    },
    image: {
      width: 20,
      height: 20,
    },
  });

  const tableRowStyles = StyleSheet.create({
    container: {},
    row: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 20,
      marginHorizontal: 5,
    },
    landscapeRow: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: 5,
      marginHorizontal: 5,
    },
    text: {
      color: theme.text500,
    },
    cell: {
      flex: 1,
      textAlign: 'center',
      fontSize: 16,
      fontWeight: '500',
    },
  });

  const buttonStyles = StyleSheet.create({
    container: {
      alignItems: 'center',
      borderWidth: 1,
      borderColor: theme.border,
      borderRadius: 10,
    },
    button: {
      margin: 5,
    },
    title: {
      color: theme.text500,
      marginHorizontal: 10,
      marginVertical: 5,
    },
  });

  const cardContainerStyles = StyleSheet.create({
    container: {
      padding: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      borderColor: theme.border,
      borderWidth: 0.3,
      marginVertical: 5,
    },
  });

  const companyScreenStyles = StyleSheet.create({
    backButton: {
      marginHorizontal: '5%',
      marginTop: '2%',
    },
    rootContainer: {
      marginHorizontal: '5%',
      marginTop: '5%',
      backgroundColor: theme.companyScreenBackground,
      height: '90%',
      borderRadius: 15,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return {
    homePageStyles,
    chartConfigurationStyles,
    authStyles,
    inputStyles,
    stockDetailsStyles,
    assetItemStyles,
    searchHeaderStyles,
    searchInputStyles,
    storyStyles,
    storyModalStyles,
    assetsCellStyles,
    dynamicTableStyles,
    headerStyles,
    tableRowStyles,
    buttonStyles,
    cardContainerStyles,
    companyScreenStyles,
  };
};
