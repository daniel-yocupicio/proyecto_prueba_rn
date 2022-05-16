import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import { Input, Icon, Button } from 'react-native-elements';
import styles from '../styles';

export default function RegisterComponent() {
    return (
        <View style={{ position: 'absolute', width: Dimensions.get('screen').width - 30, height: 330, top: 100, right: 15, borderColor: "#EAEBEC", borderRadius: 20, borderWidth: 1 }}>

            <View style={{ backgroundColor: "#ffffff80" ,flex: 1, flexDirection: 'row', borderBottomColor: "#000000", borderWidth: 1, paddingLeft: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, alignContent: 'center', paddingTop:4 }}>
                <Icon
                    name="account-plus"
                    type="material-community"
                    size={20}
                />
                <Text style={{ fontSize: 15, color: "#000000", marginLeft: 10 }}>Registrar cuenta</Text>
            </View>
            <View style={{ borderBottomColor: "#000000", borderWidth: 1, alignItems: 'center', borderBottomLeftRadius: 10, borderBottomRightRadius: 10 }}>
                <Input 
                    placeholder='Correo'
                />
                <Input 
                    placeholder='Contraseña'
                />
                <Input 
                    placeholder='Repita la contraseña'
                />
                <View style={{marginVertical:15}}>
                    <Button
                        title="Registrar cuenta"
                        buttonStyle={{backgroundColor:"#89939C"}}
                    />
                </View>
            </View>

        </View>
    )
}

/*

            <View style={styles.stylesRegisterComponent.view}>
                <Input
                    placeholder="Correo electronico"
                    style={styles.stylesRegisterComponent.inputForm}
                    onChange={() => { }}
                    rightIcon={
                        <Icon type="material-community" name="at" iconStyle={styles.stylesRegisterComponent.icon} size={40} />
                    }
                />
                <Input
                    placeholder="Contraseña"
                    style={styles.stylesRegisterComponent.inputForm}
                    onChange={(e, a) => { }}
                    rightIcon={
                        ! true ?
                            <Icon type="material-community" name="lock" iconStyle={styles.stylesRegisterComponent.icon} size={35} onPress={() => { }} /> :
                            <Icon type="material-community" name="eye" iconStyle={styles.stylesRegisterComponent.icon} size={35} onPress={() => { }} />
                    }
                />
                <Input
                    placeholder="Repetir contraseña"
                    style={styles.stylesRegisterComponent.inputForm}
                    onChange={() => { }}
                    rightIcon={
                        ! true ?
                            <Icon type="material-community" name="lock" iconStyle={styles.stylesRegisterComponent.icon} size={35} onPress={() => { }} /> :
                            <Icon type="material-community" name="eye" iconStyle={styles.stylesRegisterComponent.icon} size={35} onPress={() => { }} />
                    } />
            </View>

            <Button
                title="Registrarme"
                containerStyle={styles.stylesRegisterComponent.btn}
                buttonStyle={styles.stylesRegisterComponent.btnregister}
            />

            <View style={styles.stylesRegisterComponent.view2}>

            </View>

*/