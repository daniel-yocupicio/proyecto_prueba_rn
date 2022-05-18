import React from 'react';
import {Input, Button, Card} from 'react-native-elements';
import styles from './styles';

export default function InputsComponent() {
  return (
    <Card containerStyle={styles.card}>
      <Card.Title style={styles.cardtitle}> Registrar cuenta </Card.Title>
      <Input
        containerStyle={styles.inputcontainer}
        placeholder="correo"
        style={styles.input1}
      />
      <Input placeholder="contraseña" style={styles.input2} />
      <Input placeholder="repita la contraseña" style={styles.input2} />
      <Button title={'registrar'} />
    </Card>
  );
}
