import { StyleSheet } from 'react-native';

const stylesDrawer = StyleSheet.create({
    container: {
        flex: 1
    },
    imageBackground: {
        marginTop: -10,
        padding: 20, 
        justifyContent: 'center', 
        alignContent: 'center', 
        alignItems: 'center'
    },
    image: {
        height: 80, 
        width: 80, 
        borderRadius: 40, 
        marginBottom: 10
    },
    textName: {
        fontSize:20,
        fontFamily: 'Roboto-Medium',
        color:'#FFFFFF',
    },
    bottomButtons: {
        padding: 20, 
        borderTopWidth: 1, 
        borderTopColor: '#ccc'
    },
    textBottomButton: {
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        marginLeft: 5,
    },
    touchable: {
        paddingVertical: 10 
    },
    logoutText: {
        fontSize: 15,
        fontFamily: 'Roboto-Medium',
        marginLeft: 5,
        color: '#BF4343',
    },
    textAnonymous: {
        fontSize:20,
        fontFamily: 'Roboto-Medium',
        color:'#5D5D5D',
    },
    containericontext: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    ScrollView: {
        backgroundColor: '#fff' 
    }
  });
  
  export default stylesDrawer;
  