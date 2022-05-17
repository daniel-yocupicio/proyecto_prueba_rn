import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import stylesBar from './styles';

export default function Bar() {
  return (
    <View style={stylesBar.container}>
      <View style={stylesBar.directiontexticon}>
        <View style={stylesBar.iconcontainer}>
          <TouchableOpacity style={stylesBar.settings}>
            <Text style={stylesBar.whitecolor}>Herramientas</Text>
            <Icon
              name="cog"
              type="material-community"
              color="#34495E"
              size={27}
            />
          </TouchableOpacity>
          <TouchableOpacity style={stylesBar.help}>
            <Text style={stylesBar.whitecolor}>Ayuda</Text>
            <Icon name="help" color="#34495E" size={27} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
