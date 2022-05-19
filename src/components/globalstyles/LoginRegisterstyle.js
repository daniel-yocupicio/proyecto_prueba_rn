import {StyleSheet, Dimensions} from 'react-native';
const stylesLoginRegister = StyleSheet.create({
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
  touchabletext: {
    width: Dimensions.get('screen').width,
    marginTop: 20,
    marginLeft: 15,
  },
});

export default stylesLoginRegister;
