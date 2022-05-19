import {StyleSheet, Dimensions} from 'react-native';
const stylesLoginComponent = StyleSheet.create({
  container: {
    position: 'absolute',
    width: Dimensions.get('screen').width - 30,
    height: 300,
    top: 70,
    right: 15,
    borderColor: '#EAEBEC',
    borderRadius: 20,
    borderWidth: 1,
  },
});

export default stylesLoginComponent;
