import React from 'react';
import {View} from 'react-native';
import {Icon, Button, Card} from 'react-native-elements';
import styles from '../styles';

const Icons = () => {
  return (
    <View style={styles.stylesGoogleFacebookButtons.containerbuttons}>
      <View style={styles.stylesGoogleFacebookButtons.containerButton}>
        <Button
          buttonStyle={styles.stylesGoogleFacebookButtons.buttonstyle1}
          icon={
            <Icon type="material-community" name="google" color={'#FFFFFF'} />
          }
        />
      </View>
      <View style={styles.stylesGoogleFacebookButtons.containerButton}>
        <Button
          icon={<Icon name="facebook" color="#ffffff" />}
          buttonStyle={styles.stylesGoogleFacebookButtons.buttonstyle2}
        />
      </View>
    </View>
  );
};

export default function GoogleFacebookButtons({title}) {
  return (
    <Card containerStyle={styles.stylesGoogleFacebookButtons.cardButtons}>
      <Card.Title style={styles.stylesGoogleFacebookButtons.cardtitle2}>
        {title}
      </Card.Title>
      <View style={styles.stylesGoogleFacebookButtons.containerdimension}>
        <Icons />
      </View>
    </Card>
  );
}
