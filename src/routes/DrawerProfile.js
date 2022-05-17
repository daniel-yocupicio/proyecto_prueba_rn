import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from '../components/common/DrawerComponent';
import Profile from '../screens/Account/profile';
import values from '../const';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerProfile() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={props => <DrawerComponent {...props} />}
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
