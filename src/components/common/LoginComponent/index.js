import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import GoogleFacebookButtons from '../GoogleFacebookButtons';
import InputsLoginRegisterComponent from '../InputsLoginRegisterComponent';

export default function LoginComponent() {
  return (
    <View style={styles.container}>
      <InputsLoginRegisterComponent type="Iniciar sesión" />
      <GoogleFacebookButtons title="Iniciar con" />
    </View>
  );
}
