import React, {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import auth from '@react-native-firebase/auth';
import IsLogedContext from '../context/IsLogedContext';
import Login from '../screens/Account/login';
import Profile from '../screens/Account/profile';
import Register from '../screens/Account/register';
import Settings from '../screens/Account/setting';
import DrawerStack from './DrawerStack';

const Stack = createNativeStackNavigator();

const DrawerLoged = [
  {name: 'DrawerProfile', component: Profile, title: 'Profile'},
  {name: 'DrawerSettings', component: Settings, title: 'Settings'},
];

const DrawerNoLoged = [
  {name: 'DrawerLogin', component: Login, title: 'Login'},
  {name: 'DrawerRegister', component: Register, title: 'Register'},
];

const typeDrawer = valbool => {
  if (valbool) {
    return DrawerLoged;
  } else {
    return DrawerNoLoged;
  }
};

export default function Routes() {
  const {isLoged, setIsLoged} = React.useContext(IsLogedContext);

  function onAuthStateChanged(user) {
    if (user === null) {
      setIsLoged(false);
    } else {
      setIsLoged(true);
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  });

  return (
    <Stack.Navigator>
      {typeDrawer(isLoged).map((item, index) => (
        <Stack.Screen
          key={index}
          name={item.name}
          component={DrawerStack}
          options={{headerShown: false}}
        />
      ))}
    </Stack.Navigator>
  );
}

/*
        <DrawerStack
          component={item.component}
          name={item.name}
          title={item.title}
        />;
*/

/*import DrawerProfile from './DrawerProfile';
import DrawerLogin from './DrawerLogin';
import DrawerRegister from './DrawerRegister';
import DrawerSettings from './DrawerSetting';*/

/*const HasDrawerProfile = boolvalue => {
  if (boolvalue) {
    return (
      <Stack.Screen
        name="DrawerProfile"
        component={DrawerProfile}
        options={{headerShown: false}}
      />
    );
  } else {
    return null;
  }
};*/

/*
      {HasDrawerProfile(isLoged)}
      <Stack.Screen
        name="DrawerLogin"
        component={DrawerLogin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerRegister"
        component={DrawerRegister}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DrawerSettings"
        component={DrawerSettings}
        options={{headerShown: false}}
      />
*/
