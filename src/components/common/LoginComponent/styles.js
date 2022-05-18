import {StyleSheet, Dimensions} from 'react-native';
const stylesLoginComponent = StyleSheet.create({
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
  input1: {fontSize: 18, marginBottom: -10, borderRadius: 10},
  input2: {fontSize: 18, marginBottom: -10, marginTop: -10},
  cardtitle2: {
    fontSize: 15,
    alignItems: 'center',
    marginVertical: -10,
    marginBottom: 3,
  },
  inputcontainer: {borderRadius: 10, backgroundColor: '#fff'},
  touchabletext: {
    width: Dimensions.get('screen').width,
    marginTop: 20,
    marginLeft: 15,
  },
});

export default stylesLoginComponent;
