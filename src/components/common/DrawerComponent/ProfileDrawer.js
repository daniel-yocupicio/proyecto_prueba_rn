import React from 'react';
import {Text, TouchableOpacity, ImageBackground} from 'react-native';
import fuctionsDrawer from './functions';
import stylesDrawer from './styles.js';

export default function ProfileDrawer({navigation, isLoged}) {
  return (
    <TouchableOpacity
      onPress={() => fuctionsDrawer.gotoProfile(navigation, isLoged)}>
      <ImageBackground
        source={fuctionsDrawer.imageBackgroud(isLoged)}
        style={stylesDrawer.imageBackground}>
        {fuctionsDrawer.imageUser(isLoged)}
        <Text style={stylesDrawer.textName}>
          {fuctionsDrawer.textName(isLoged, 'Daniel Yocupicio')}
        </Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}
