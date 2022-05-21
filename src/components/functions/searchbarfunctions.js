import React from 'react';
import {Image} from 'react-native';
import styles from '../styles/index.js';

const fuctionssearchBar = {
  imageOrNull: writing => {
    if (writing.length === 0) {
      return (
        <Image
          source={require('../../assets/image/lupa.png')}
          style={styles.stylesSearchBar.imageleft}
        />
      );
    } else {
      return null;
    }
  },

  textInputStyle: text => {
    if (text.length === 0) {
      return styles.stylesSearchBar.textInput;
    } else {
      return styles.stylesSearchBar.textInputChanged;
    }
  },

  imageRightStyle: microphone => {
    if (microphone) {
      return styles.stylesSearchBar.imagerightActive;
    } else {
      return styles.stylesSearchBar.imageright;
    }
  },
};

export default fuctionssearchBar;
