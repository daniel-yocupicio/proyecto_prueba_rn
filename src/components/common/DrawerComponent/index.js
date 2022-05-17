import React from 'react';
import {View} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import fuctionsDrawer from './functions';
import stylesDrawer from './styles.js';
import IsLogedContext from '../../../context/IsLogedContext.js';
import ButtonDrawerComponent from './ButtonDrawerComponent';
import ProfileDrawer from './ProfileDrawer';

export default function Drawer(props) {
  const {isLoged} = React.useContext(IsLogedContext);
  return (
    <View style={stylesDrawer.container}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={stylesDrawer.ScrollView}>
        <ProfileDrawer navigation={props.navigation} isLoged={isLoged} />
        <View>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={stylesDrawer.bottomButtons}>
        {fuctionsDrawer
          .typeList(isLoged)
          .iconsdraweraccount.map((item, index) => (
            <ButtonDrawerComponent
              key={index}
              navigation={props.navigation}
              route={fuctionsDrawer.typeList(isLoged).routes[index]}
              coloricon={fuctionsDrawer.typeList(isLoged).colorsicon[index]}
              nameicon={item}
              textButton={
                fuctionsDrawer.typeList(isLoged).textbuttonsdraweraccount[index]
              }
            />
          ))}
      </View>
    </View>
  );
}
