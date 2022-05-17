import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from '../components/common/DrawerComponent';
import Settings from '../screens/Account/setting';
import values from '../const';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerSettings() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={props => <DrawerComponent {...props} />}
            screenOptions={values.drawerComponent.screenoptions}>
            <DrawerNavigation.Screen
                name="Settings"
                component={Settings}
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
