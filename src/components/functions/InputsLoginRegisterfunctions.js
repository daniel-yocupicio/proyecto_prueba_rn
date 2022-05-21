import auth from '@react-native-firebase/auth';

const defaultValue = () => {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
};

const validateData = (type, data, warningChange) => {
  if (type === 'Registrar cuenta') {
    if (
      data.password === '' ||
      (data.password.length < 6 && data.password !== data.repeatPassword)
    ) {
      warningChange(true);
    } else {
      warningChange(false);
      createAccount(data.email, data.password);
    }
  } else {
    if (data.password === '' || data.password.length < 6) {
      warningChange(true);
    } else {
      warningChange(false);
      loginAccount(data.email, data.password);
    }
  }
};

const createAccount = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
};

const loginAccount = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }
      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }
      console.error(error);
    });
};

const InputLoginRegisterFunctions = {
  defaultValue,
  validateData,
};

export default InputLoginRegisterFunctions;
