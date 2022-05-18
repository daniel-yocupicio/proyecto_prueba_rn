import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './styles';
import InputsComponent from './InputsComponent';
import GoogleFacebookButtons from '../GoogleFacebookButtons';

export default function RegisterComponent() {
  return (
    <View style={styles.container}>
      <InputsComponent />
      <GoogleFacebookButtons title="Registrarse con" />
      <View style={styles.touchabletext}>
        <TouchableOpacity>
          <Text>Si ya tiene una cuenta presione aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
