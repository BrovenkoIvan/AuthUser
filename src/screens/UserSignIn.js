import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import SignInForm from '../components/SignInForm';
import {useDispatch, useSelector} from 'react-redux';
import {signin} from '../redux/actions';

const UserSignIn = () => {
  const dispatch = useDispatch();
  const onButtonPressed = (login, password) => {
    if (login && password) {
      console.log('good');
      dispatch(signin(login, password));
    } else {
      console.log(' no good');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <SignInForm onButtonPressed={onButtonPressed} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default UserSignIn;
