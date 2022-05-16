import React, { useState } from 'react';
import { View, Image, TouchableOpacity, TextInput, Pressable } from 'react-native';
import functions from '../functions/searchbarfunctions';
import styles from '../styles/index.js';

const SearchBar = (props) => {
    const [activemicrophone, setActiveMicrophone] = useState(false)
    const [textInput, setTextInput] = useState('')
    const activeMicrophone = () => setActiveMicrophone(!activemicrophone)
    const onChangeTextFunction = (text) => setTextInput(text)

    return (
        <View style={styles.stylesSearchBar.container} >
            <Pressable style={styles.stylesSearchBar.pressable} >
                <View style={styles.stylesSearchBar.searchView} >
                    {functions.imageOrNull(textInput)}
                    <TextInput
                        placeholder='What do you want to eat?'
                        style={functions.textInputStyle(textInput)}
                        onChangeText={onChangeTextFunction}
                    />
                    <TouchableOpacity onPress={activeMicrophone}>
                        <Image
                            source={require('../../assets/image/microfono.png')}
                            style={functions.imageRightStyle(activemicrophone)} />
                    </TouchableOpacity>
                </View>
            </Pressable>
        </View>
    );
}

export default SearchBar;