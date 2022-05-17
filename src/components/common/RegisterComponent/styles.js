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
  input1: {fontSize: 18, marginBottom: -10, borderRadius: 10},
  input2: {fontSize: 18, marginBottom: -10, marginTop: -10},
  cardtitle2: {
    fontSize: 15,
    alignItems: 'center',
    marginVertical: -10,
    marginBottom: 3,
  },
  inputcontainer: {borderRadius: 10, backgroundColor: '#fff'},
  containerbuttons: {
    flex: 1,
    flexDirection: 'row',
    width: Dimensions.get('screen').width,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  containerdimension: {width: Dimensions.get('screen').width, height: 50},
  containerButton: {width: '34%', marginHorizontal: 5},
  buttonstyle1: {
    backgroundColor: '#268EF7',
    alignContent: 'center',
  },
  buttonstyle2: {backgroundColor: '#3b5998'},
  touchabletext: {
    width: Dimensions.get('screen').width,
    marginTop: 20,
    marginLeft: 15,
  },
});

export default stylesDrawer;
