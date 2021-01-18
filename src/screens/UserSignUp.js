import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import SignUpForm from '../components/SignUpForm';
import ConnectyCube from 'react-native-connectycube';

const UserSignUp = ({navigation}) => {
  const onButtonPressed = (login, fullname, password) => {
    if (login && password && fullname) {
      signUp(login, fullname, password);
    } else {
      console.log('check input data');
    }
  };
  const signUp = async (login, fullname, password) => {
    const userProfile = {
      login: login,
      password: password,
      full_name: fullname,
    };
    await ConnectyCube.createSession();
    await ConnectyCube.users.signup(userProfile).then(() => {
      navigation.navigate('Signin');
    });
  };
  return (
    <SafeAreaView style={styles.container}>
      <SignUpForm onButtonPressed={onButtonPressed} />
      <View style={styles.textView}>
        <Text>Already have an account.</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Signin')}>
          <Text style={{color: 'blue'}}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textView: {
    marginBottom: 15,
    flexDirection: 'row',
  },
});
export default UserSignUp;
