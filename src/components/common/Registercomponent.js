import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Input, Icon, Button, Card} from 'react-native-elements';
import styles from '../styles';

export default function RegisterComponent() {
  return (
    <View
      style={{
        position: 'absolute',
        width: Dimensions.get('screen').width - 30,
        height: 400,
        top: 70,
        right: 15,
        borderColor: '#EAEBEC',
        borderRadius: 20,
        borderWidth: 1,
      }}>
      <Card containerStyle={{borderRadius: 7, opacity: 0.95}}>
        <Card.Title style={{fontSize: 15, alignItems: 'center'}}>
          {' '}
          Registrar cuenta{' '}
        </Card.Title>
        <Input
          containerStyle={{borderRadius: 10, backgroundColor: '#fff'}}
          placeholder="correo"
          style={{fontSize: 18, marginBottom: -10, borderRadius: 10}}
        />
        <Input
          placeholder="contraseña"
          style={{fontSize: 18, marginBottom: -10, marginTop: -10}}
        />
        <Input
          placeholder="repita la contraseña"
          style={{fontSize: 18, marginBottom: -10, marginTop: -10}}
        />
        <Button title={'registrar'} />
      </Card>
      <Card containerStyle={{borderRadius: 7, opacity: 0.95}}>
        <Card.Title
          style={{
            fontSize: 15,
            alignItems: 'center',
            marginVertical: -10,
            marginBottom: 3,
          }}>
          {' '}
          Registrarse con{' '}
        </Card.Title>
        <View style={{width: Dimensions.get('screen').width, height: 50}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              width: Dimensions.get('screen').width,
              alignContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: '34%', marginHorizontal: 5}}>
              <Button
                buttonStyle={{
                  backgroundColor: '#268EF7',
                  alignContent: 'center',
                }}
                icon={
                  <Icon
                    type="material-community"
                    name="google"
                    color={'#FFFFFF'}
                  />
                }
              />
            </View>
            <View style={{width: '34%', marginHorizontal: 5}}>
              <Button
                icon={<Icon name="facebook" color="#ffffff" />}
                buttonStyle={{backgroundColor: '#3b5998'}}
              />
            </View>
          </View>
        </View>
      </Card>
      <View
        style={{
          width: Dimensions.get('screen').width,
          marginTop: 20,
          marginLeft: 15,
        }}>
        <TouchableOpacity>
          <Text>Si ya tiene una cuenta presione aqui</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
