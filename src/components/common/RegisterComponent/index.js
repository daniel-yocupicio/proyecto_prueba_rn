import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Input, Icon, Button, Card} from 'react-native-elements';
import styles from './styles';

export default function RegisterComponent() {
  return (
    <View style={styles.container}>
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
      <Card containerStyle={styles.card}>
        <Card.Title style={styles.cardtitle2}> Registrarse con </Card.Title>
        <View style={styles.containerdimension}>
          <View style={styles.containerbuttons}>
            <View style={styles.containerButton}>
              <Button
                buttonStyle={styles.buttonstyle1}
                icon={
                  <Icon
                    type="material-community"
                    name="google"
                    color={'#FFFFFF'}
                  />
                }
              />
            </View>
            <View style={styles.containerButton}>
              <Button
                icon={<Icon name="facebook" color="#ffffff" />}
                buttonStyle={styles.buttonstyle2}
              />
            </View>
          </View>
        </View>
      </Card>
      <View style={styles.touchabletext}>
        <TouchableOpacity>
          <Text>Si ya tiene una cuenta presione aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
