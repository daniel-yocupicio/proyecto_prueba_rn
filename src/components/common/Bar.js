import React from "react";
import { Dimensions, Text, View, } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { Icon } from 'react-native-elements';
import styles from "../styles";

export default function Bar({title}) {
    return (
        <View style={styles.stylesBar.container}>
            <View style={styles.stylesBar.directiontexticon}>
                <Text style={styles.stylesBar.text}>{title}</Text>
                <View style={styles.stylesBar.iconcontainer}>
                    <Icon
                        name='help'
                        color="#ffffff"
                        size={27} />
                </View>
            </View>
            <View style={styles.stylesBar.svg}>
                <Svg
                    height={100}
                    width={Dimensions.get('screen').width}
                    viewBox="0 0 1440 320">
                    <Path
                        fill="#85929E"
                        d="M0,160L0,192L120,192L120,96L240,96L240,288L360,288L360,32L480,32L480,32L600,32L600,96L720,96L720,128L840,128L840,192L960,192L960,32L1080,32L1080,0L1200,0L1200,96L1320,96L1320,224L1440,224L1440,0L1320,0L1320,0L1200,0L1200,0L1080,0L1080,0L960,0L960,0L840,0L840,0L720,0L720,0L600,0L600,0L480,0L480,0L360,0L360,0L240,0L240,0L120,0L120,0L0,0L0,0Z"
                        opacity="0.7"/>
                </Svg>
            </View>
        </View>
        )
}