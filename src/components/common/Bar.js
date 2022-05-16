import React from "react";
import { Dimensions, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Icon } from 'react-native-elements';
import styles from "../styles";

export default function Bar() {
    return (
        <View style={styles.stylesBar.container}>
            <View style={styles.stylesBar.directiontexticon}>
                <View style={styles.stylesBar.iconcontainer}>
                    <TouchableOpacity
                        style={styles.stylesBar.touchable}>
                        <Text style={{ color: "#34495E" }}>Herramientas</Text>
                        <Icon
                            name='cog'
                            type='material-community'
                            color="#34495E"
                            size={27} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.stylesBar.touchable}>
                        <Text style={{ color: "#34495E" }}>Ayuda</Text>
                        <Icon
                            name='help'
                            color="#34495E"
                            size={27} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}