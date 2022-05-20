import React, {useState} from 'react';
import {View} from 'react-native';
import {Input, Button, Card} from 'react-native-elements';
import styles from '../globalstyles';

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

export default function InputsLoginRegisterComponent({type}) {
  const [data, setData] = useState(defaultValue());
  const [warningData, setwarningData] = useState(false);

  const onChange = (e, key) => {
    setData({...data, [key]: e.nativeEvent.text});
  };

  return (
    <Card containerStyle={styles.stylesInputsComponentsstyle.card}>
      <Card.Title style={styles.stylesInputsComponentsstyle.cardtitle}>
        {type}
      </Card.Title>
      <InputsForm onChange={onChange} type={type} />
      <Button
        title={type}
        onPress={(d, s, w) => validateData(data, setwarningData, warningData)}
      />
    </Card>
  );
}

function defaultValue() {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
}

const validateData = (datos, warningFunction, warningData) => {
  if (datos.password === '' || datos.password.length < 6) {
    warningFunction(true);
  } else {
    warningFunction(false);
  }
  if (datos.password !== datos.repeatPassword) {
    warningFunction(true);
  } else {
    warningFunction(false);
  }
  if (
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
      datos.email,
    )
  ) {
    warningFunction(false);
  } else {
    warningFunction(true);
  }
  if (warningData) {
    //submit();
  }
};
