import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Drawer from '../components/common/drawercomponent';
import Login from '../screens/Account/login';
import values from '../const';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerLogin() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={props => <Drawer {...props} />}
            screenOptions={values.drawerComponent.screenoptions}>
            <DrawerNavigation.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false,
                    drawerLabel: () => null,
                    title: 'Iniciar sesión',
                    drawerIcon: () => null,
                    drawerItemStyle: { display: 'none' }
                }}
            />
        </DrawerNavigation.Navigator>
    );
}
