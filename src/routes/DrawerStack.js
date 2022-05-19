import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../components/common/DrawerComponent';
import values from '../const';

const DrawerNavigation = createDrawerNavigator();

const FirstScreen = (view, component) => {
  return (
    <DrawerNavigation.Screen
      name={view}
      component={component}
      options={{
        drawerItemStyle: {display: 'none'},
      }}
    />
  );
};

export default function DrawerStack({route}) {
  const {view, component} = route.params;
  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      screenOptions={values.drawerComponent.screenoptions}>
      {FirstScreen(view, component)}
    </DrawerNavigation.Navigator>
  );
}
