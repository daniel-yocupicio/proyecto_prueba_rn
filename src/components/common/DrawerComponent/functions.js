import React from 'react';
import {Image} from 'react-native';
import stylesDrawer from './styles';
import values from './const';
import auth from '@react-native-firebase/auth';

const fuctionsDrawer = {
  imageUser: boolvalue => {
    if (boolvalue) {
      return (
        <Image
          source={require('../../../assets/image/user-profile.jpg')}
          style={stylesDrawer.image}
        />
      );
    } else {
      return null;
    }
  },
  imageBackgroud: boolvalue => {
    if (boolvalue) {
      return require('../../../assets/image/menu-bg.jpeg');
    } else {
      return require('../../../assets/image/background.jpg');
    }
  },
  textName: (boolvalue, text) => {
    if (boolvalue) {
      return text;
    } else {
      return '';
    }
  },
  navigationFunction: (navigation, screenName) => {
    navigation.navigate(screenName);
  },
  typeList: boolvalue => {
    if (boolvalue) {
      return values.isloged;
    } else {
      return values.isnotloged;
    }
  },
  gotoScreen: (navigation, route) => {
    navigation.navigate(route);
  },
  gotoProfile: (navigation, boolvalue) => {
    if (boolvalue) {
      navigation.navigate('DrawerProfile');
    }
  },
  logout: () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'));
  },
};

export default fuctionsDrawer;
