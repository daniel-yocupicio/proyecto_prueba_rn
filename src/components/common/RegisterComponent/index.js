import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import GoogleFacebookButtons from '../GoogleFacebookButtons';
import InputsLoginRegisterComponent from '../InputsLoginRegisterComponent';

export default function RegisterComponent() {
  return (
    <View style={styles.container}>
      <InputsLoginRegisterComponent type="Registrar cuenta" />
      <GoogleFacebookButtons title="Registrarse con" />
      <View style={styles.touchabletext}>
        <TouchableOpacity>
          <Text>Si ya tiene una cuenta presione aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
