/*

import React from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity } from 'react-native'
import { DrawerItemList, DrawerContentScrollView } from '@react-navigation/drawer';
import { Icon } from 'react-native-elements';
import functions from '../functions/drawerfunctions';
import styles from '../styles/index';
import IsLogedContext from '../../context/IsLogedContext';

const gotoScreen = (navigation, route) => {
    navigation.navigate(route)
}

const gotoProfile = (navigation, boolvalue) => {
    if(boolvalue) navigation.navigate('DrawerProfile')
}

const ListButton = ({ isloged, navigation }) => {
    return functions.typeList(isloged).iconsdraweraccount.map((item, index) => (
        <TouchableOpacity
            key={index}
            onPress={() => gotoScreen(navigation, functions.typeList(isloged).routes[index])}
            style={styles.stylesDrawer.touchable}
        >
            <View style={styles.stylesDrawer.containericontext}>
                <Icon
                    name={item}
                    type='material-community'
                    color={functions.typeList(isloged).colorsicon[index]}
                />
                <Text style={styles.stylesDrawer.textBottomButton}>
                    {functions.typeList(isloged).textbuttonsdraweraccount[index]}
                </Text>
            </View>
        </TouchableOpacity>
    )
    )

}

export default function Drawer(props) {
    const { isLoged, setIsLoged } = React.useContext(IsLogedContext)
    return (
        <View style={styles.stylesDrawer.container}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={styles.stylesDrawer.ScrollView}>
                <TouchableOpacity
                    onPress={() => gotoProfile(props.navigation, isLoged)}>
                    <ImageBackground
                        source={functions.imageBackgroud(isLoged)}
                        style={styles.stylesDrawer.imageBackground}>
                        {functions.imageUser(isLoged)}
                        <Text style={styles.stylesDrawer.textName}>{functions.textName(isLoged, "Daniel Yocupicio")}</Text>
                    </ImageBackground>
                </TouchableOpacity>
                <View>
                    <DrawerItemList {...props} />
                </View>
            </DrawerContentScrollView>
            <View style={styles.stylesDrawer.bottomButtons}>
                <ListButton isloged={isLoged} navigation={props.navigation} />
            </View>
        </View>
    )
}

*/