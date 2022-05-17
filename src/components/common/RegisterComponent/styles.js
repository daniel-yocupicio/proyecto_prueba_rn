import {StyleSheet, Dimensions} from 'react-native';
const stylesDrawer = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('screen').width - 30,
    height: 400,
    top: 70,
    right: 15,
    borderColor: '#EAEBEC',
    borderRadius: 20,
    borderWidth: 1,
  },
  card: {borderRadius: 7, opacity: 0.95},
  cardtitle: {fontSize: 15, alignItems: 'center'},
});

export default stylesDrawer;
