import React from 'react';
import {View} from 'react-native';
import styles from '../../globalstyles';
import GoogleFacebookButtons from '../GoogleFacebookButtons';
import InputsLoginRegisterComponent from '../InputsLoginRegisterComponent';

export default function LoginComponent() {
  return (
    <View style={styles.stylesLoginRegister.container}>
      <InputsLoginRegisterComponent type="Iniciar sesión" />
      <GoogleFacebookButtons title="Iniciar con" />
    </View>
  );
}
