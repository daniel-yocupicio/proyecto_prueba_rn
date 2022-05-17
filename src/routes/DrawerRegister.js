import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from '../components/common/DrawerComponent';
import Register from '../screens/Account/register';
import values from '../const';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerRegister() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={props => <DrawerComponent {...props} />}
            screenOptions={values.drawerComponent.screenoptions}>
            <DrawerNavigation.Screen
                name="Register"
                component={Register}
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
