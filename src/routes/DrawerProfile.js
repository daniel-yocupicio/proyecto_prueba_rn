import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Drawer from '../components/common/drawercomponent';
import Profile from '../screens/Account/profile';
import values from '../const';
import { IsLogedContextProvider } from '../context/IsLogedContext';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerProfile() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={props => <Drawer {...props} />}
            screenOptions={values.drawerComponent.screenoptions}>
            <DrawerNavigation.Screen
                name="Profile"
                component={Profile}
                options={{
                    drawerLabel: () => null,
                    title: null,
                    drawerIcon: () => null,
                    drawerItemStyle: { display: 'none' }
                }}
            />
        </DrawerNavigation.Navigator>
    );
}
