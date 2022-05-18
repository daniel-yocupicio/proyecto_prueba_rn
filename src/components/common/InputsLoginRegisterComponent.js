import React from 'react';
import {Input, Button, Card} from 'react-native-elements';
import styles from '../styles';

export default function InputsLoginRegisterComponent({type}) {
  return (
    <Card containerStyle={styles.stylesInputsComponentsstyle.card}>
      <Card.Title style={styles.stylesInputsComponentsstyle.cardtitle}>
        {type}
      </Card.Title>
      <Input
        containerStyle={styles.stylesInputsComponentsstyle.inputcontainer}
        placeholder="correo"
        style={styles.stylesInputsComponentsstyle.input1}
      />
      <Input
        placeholder="contraseña"
        style={styles.stylesInputsComponentsstyle.input2}
      />
      {type === 'Registrar cuenta' ? (
        <Input
          placeholder="repita la contraseña"
          style={styles.stylesInputsComponentsstyle.input2}
        />
      ) : null}
      <Button title={type} />
    </Card>
  );
}
