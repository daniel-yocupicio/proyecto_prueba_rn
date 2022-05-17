import React from 'react';
import {View} from 'react-native';
import {
  DrawerItemList,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import ProfileDrawer from './ProfileDrawer';
import stylesDrawer from './styles.js';

export default function DrawerScroll({props, isLoged}) {
  return (
    <DrawerContentScrollView
      {...props}
      contentContainerStyle={stylesDrawer.ScrollView}>
      <ProfileDrawer navigation={props.navigation} isLoged={isLoged} />
      <View>
        <DrawerItemList {...props} />
      </View>
    </DrawerContentScrollView>
  );
}
