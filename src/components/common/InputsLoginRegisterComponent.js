import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Input, Button, Card, Overlay} from 'react-native-elements';
import styles from '../globalstyles';
import auth from '@react-native-firebase/auth';
import InputLoginRegisterFunctions from '../functions/InputsLoginRegisterfunctions';

function InputsForm({onChange, type}) {
  return (
    <View>
      <Input
        placeholder="correo"
        style={styles.stylesInputsComponentsstyle.input1}
        onChange={(e, a) => onChange(e, 'email')}
      />
      <Input
        placeholder="contraseña"
        style={styles.stylesInputsComponentsstyle.input2}
        onChange={(e, a) => onChange(e, 'password')}
      />
      {type === 'Iniciar sesión' ? null : (
        <Input
          placeholder="repita la contraseña"
          style={styles.stylesInputsComponentsstyle.input2}
          onChange={(e, a) => onChange(e, 'repeatPassword')}
        />
      )}
    </View>
  );
}

function Error({isvisible, warningChange}) {
  return (
    <Overlay isVisible={isvisible} onBackdropPress={() => warningChange(false)}>
      <View
        style={{
          width: Dimensions.get('screen').width - 100,
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: '#CB4335', fontWeight: 'bold'}}>
          Error
        </Text>
      </View>
    </Overlay>
  );
}

export default function InputsLoginRegisterComponent({type}) {
  const [data, setData] = useState(InputLoginRegisterFunctions.defaultValue());
  const [warningData, setwarningData] = useState(false);

  const onChange = (e, key) => setData({...data, [key]: e.nativeEvent.text});
  const warningChange = value => setwarningData(value);

  return (
    <Card containerStyle={styles.stylesInputsComponentsstyle.card}>
      <Card.Title style={styles.stylesInputsComponentsstyle.cardtitle}>
        {type}
      </Card.Title>
      <InputsForm onChange={onChange} type={type} />
      <Button
        title={type}
        onPress={(d, s, w) =>
          InputLoginRegisterFunctions.validateData(type, data, warningChange)
        }
      />
      <Error isvisible={warningData} warningChange={warningChange} />
    </Card>
  );
}

/*function defaultValue() {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
}*/

/*const validateData = (datos, warningFunction, warningData) => {
  if (datos.password === '' || datos.password.length < 6) {
    warningFunction(true);
  } else {
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        datos.email,
      )
    ) {
      if (datos.password === datos.repeatPassword) {
        warningFunction(false);
        createAccount(datos.email, datos.password);
      } else {
        warningFunction(true);
      }
    } else {
      warningFunction(true);
    }
  }
};

function createAccount(email, password) {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
}
*/
