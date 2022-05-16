/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
 import React from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import Routes from './src/routes';
 import { IsLogedContextProvider } from './src/context/IsLogedContext';


const App = () => {
  return (
    <IsLogedContextProvider>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </IsLogedContextProvider>
  );
};

export default App;
