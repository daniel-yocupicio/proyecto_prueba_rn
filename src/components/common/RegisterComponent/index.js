import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../globalstyles';
import GoogleFacebookButtons from '../GoogleFacebookButtons';
import InputsLoginRegisterComponent from '../InputsLoginRegisterComponent';

export default function RegisterComponent() {
  return (
    <View style={styles.stylesLoginRegister.container}>
      <InputsLoginRegisterComponent type="Registrar cuenta" />
      <GoogleFacebookButtons title="Registrarse con" />
      <View style={styles.stylesLoginRegister.touchabletext}>
        <TouchableOpacity>
          <Text>Si ya tiene una cuenta presione aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
