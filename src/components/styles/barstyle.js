import { Dimensions, StyleSheet } from 'react-native';

const stylesBar = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        height: 50
    },
    directiontexticon: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        fontSize: 30,
        color: "#ffffff",
        marginLeft: 10,
        fontWeight: "bold",
        fontFamily: 'lucida grande'
    },
    iconcontainer: {
        position: "absolute",
        top: 10,
        right: 10,
        flex: 1,
        flexDirection: 'row'
    },
    touchable: {
        flex: 1,
        flexDirection: 'row',
        margin: 2,
        alignItems: 'center',
    }
});

export default stylesBar;
