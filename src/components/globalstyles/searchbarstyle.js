import {StyleSheet} from 'react-native';

const stylesSearchBar = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  pressable: {
    width: 340,
    height: 35,
    backgroundColor: '#E6E3E3',
    borderRadius: 30,
  },
  searchView: {
    flex: 1,
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },
  imageleft: {
    height: 17,
    width: 17,
    marginLeft: 10,
  },
  imageright: {
    height: 20,
    width: 20,
    marginLeft: 10,
  },
  imagerightActive: {
    height: 30,
    width: 30,
    marginLeft: 5,
  },
  textInput: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    color: '#000',
    height: 60,
    width: 276,
  },
  textInputChanged: {
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 15,
    color: '#000',
    height: 60,
    width: 303,
  },
});

export default stylesSearchBar;
