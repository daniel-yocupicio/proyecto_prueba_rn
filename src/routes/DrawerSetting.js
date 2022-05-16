import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import Drawer from '../components/common/drawercomponent';
import Settings from '../screens/Account/setting';
import values from '../const';

const DrawerNavigation = createDrawerNavigator();

export default function DrawerSettings() {
    return (
        <DrawerNavigation.Navigator
            drawerContent={props => <Drawer {...props} />}
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
