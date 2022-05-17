import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerComponent from '../components/common/DrawerComponent';
import Login from '../screens/Account/login';
import values from '../const';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerLogin() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={props => <DrawerComponent {...props} />}
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
