import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Icon, Button, Card} from 'react-native-elements';
import styles from '../globalstyles';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

async function onGoogleButtonPress() {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}

const Icons = () => {
  return (
    <View style={styles.stylesGoogleFacebookButtons.containerbuttons}>
      <View style={styles.stylesGoogleFacebookButtons.containerButton}>
        <Button
          buttonStyle={styles.stylesGoogleFacebookButtons.buttonstyle1}
          icon={
            <Icon type="material-community" name="google" color={'#FFFFFF'} />
          }
          onPress={() =>
            onGoogleButtonPress()
              .then(() => console.log('Signed in with Google!'))
              .catch(err => console.log(err))
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
  useEffect(() => {
    GoogleSignin.configure({
      webClientId:
        '1020541555425-ihi76j2efhmjt245mjs83rv6rotq4i0k.apps.googleusercontent.com',
    });
  });

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
