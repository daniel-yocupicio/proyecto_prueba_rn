import { Dimensions, StyleSheet } from 'react-native';

const stylesBar = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        backgroundColor: "#34495E",
        height: 50
    },
    directiontexticon: {
        flex: 1, 
        flexDirection: 'row' 
    },
    text:{
        fontSize: 30, 
        color: "#ffffff", 
        marginLeft: 10, 
        fontWeight: "bold", 
        fontFamily: 'lucida grande' 
    },
    iconcontainer:{
        position: "absolute", 
        top: 10, 
        right: 10 
    },
    svg: {
        position: 'absolute', 
        top: 30,
    }
});

export default stylesBar;
