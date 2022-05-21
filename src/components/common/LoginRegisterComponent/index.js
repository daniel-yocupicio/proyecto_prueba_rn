import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../../globalstyles';
import GoogleFacebookButtons from '../GoogleFacebookButtons';
import InputsLoginRegisterComponent from '../InputsLoginRegisterComponent';
import loginregisterConst from '../../../const/loginregisterConst';

export default function LoginRegisterComponent({type}) {
  return (
    <View style={styles.stylesLoginRegister.container}>
      <InputsLoginRegisterComponent type={type} />
      <GoogleFacebookButtons title={type} />
      {type === loginregisterConst.type2 ? (
        <View style={styles.stylesLoginRegister.touchabletext}>
          <TouchableOpacity>
            <Text>Si ya tiene una cuenta presione aqui</Text>
          </TouchableOpacity>
        </View>
      ) : null}
    </View>
  );
}
