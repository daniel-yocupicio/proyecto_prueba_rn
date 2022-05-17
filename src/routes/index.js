import React, { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import DrawerProfile from './DrawerProfile';
import DrawerLogin from './DrawerLogin';
import DrawerRegister from './DrawerRegister';
import DrawerSettings from './DrawerSetting';
import IsLogedContext from '../context/IsLogedContext';

const Stack = createNativeStackNavigator();

const HasDrawerProfile = (boolvalue) => {
    if (boolvalue) return (
        <Stack.Screen
            name="DrawerProfile"
            component={DrawerProfile}
            options={{ headerShown: false }}
        />
    )
    else return null
}

export default function Routes() {
    const { isLoged, setIsLoged } = React.useContext(IsLogedContext)

    function onAuthStateChanged(user) {
        if(user === null) setIsLoged(false)
        else setIsLoged(true)
    }

    useEffect(() => {
        const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
        return subscriber; 
    }, []);

    return (
        <Stack.Navigator>
            {HasDrawerProfile(isLoged)}
            <Stack.Screen
                name="DrawerLogin"
                component={DrawerLogin}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DrawerRegister"
                component={DrawerRegister}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="DrawerSettings"
                component={DrawerSettings}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}