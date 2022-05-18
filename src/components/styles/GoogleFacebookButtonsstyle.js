import {StyleSheet, Dimensions} from 'react-native';
const stylesDrawer = StyleSheet.create({
  cardButtons: {borderRadius: 7, opacity: 0.95},
  cardtitle2: {
    fontSize: 15,
    alignItems: 'center',
    marginVertical: -10,
    marginBottom: 3,
  },
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
});

export default stylesDrawer;
