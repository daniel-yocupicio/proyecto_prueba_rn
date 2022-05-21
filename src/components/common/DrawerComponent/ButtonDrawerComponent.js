import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import functionsDrawer from './functions';
import stylesDrawer from './styles';

export default function ButtonDrawerComponent({
  navigation,
  route,
  coloricon,
  nameicon,
  textButton,
}) {
  return (
    <TouchableOpacity
      key={nameicon}
      onPress={() => {
        route === 'none'
          ? functionsDrawer.logout()
          : functionsDrawer.gotoScreen(navigation, route);
      }}
      style={stylesDrawer.touchable}>
      <View style={stylesDrawer.containericontext}>
        <Icon name={nameicon} type="material-community" color={coloricon} />
        <Text style={stylesDrawer.textBottomButton}>{textButton}</Text>
      </View>
    </TouchableOpacity>
  );
}
