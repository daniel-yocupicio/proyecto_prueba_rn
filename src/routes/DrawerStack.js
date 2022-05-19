import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerComponent from '../components/common/DrawerComponent';
import values from '../const';
import IsLogedContext from '../context/IsLogedContext';
import Login from '../screens/Account/login';
import Profile from '../screens/Account/profile';

const DrawerNavigation = createDrawerNavigator();

const FirstScreen = valbool => {
  if (valbool) {
    return (
      <DrawerNavigation.Screen
        name="Profile"
        component={Profile}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
    );
  } else {
    return (
      <DrawerNavigation.Screen
        name="Login"
        component={Login}
        options={{
          drawerItemStyle: {display: 'none'},
        }}
      />
    );
  }
};

export default function DrawerStack() {
  const {isLoged, setIsLoged} = React.useContext(IsLogedContext);

  return (
    <DrawerNavigation.Navigator
      drawerContent={props => <DrawerComponent {...props} />}
      screenOptions={values.drawerComponent.screenoptions}>
      {FirstScreen(isLoged)}
    </DrawerNavigation.Navigator>
  );
}
