import { Dimensions, StyleSheet } from 'react-native';

const stylesBarBottom = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        backgroundColor: "#34495E",
        height: 10,
        position: 'absolute',
        bottom: 0,
        left: 0        
    },
});

export default stylesBarBottom;
