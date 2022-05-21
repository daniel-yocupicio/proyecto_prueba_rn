import React, {useState} from 'react';
import {View, Text, Dimensions} from 'react-native';
import {Input, Button, Card, Overlay} from 'react-native-elements';
import styles from '../globalstyles';
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
