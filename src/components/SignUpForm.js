import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const AuthForm = ({onButtonPressed}) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [fullname, setFullname] = useState('');
  return (
    <View style={styles.container}>
      <View style={styles.textView}>
        <Text style={{fontSize: 28}}>Sign up</Text>
      </View>
      <View>
        <View>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            value={fullname}
            onChangeText={setFullname}
            placeholder={'full name'}
            style={styles.Input}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            value={login}
            onChangeText={setLogin}
            placeholder={'Login'}
            style={styles.Input}
          />
        </View>
        <View>
          <TextInput
            autoCorrect={false}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            placeholder={'password'}
            style={styles.Input}
            secureTextEntry={true}
          />
        </View>
      </View>
      <TouchableOpacity
        onPress={() => onButtonPressed(login, fullname, password)}>
        <View style={styles.button}>
          <Text>Register</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 100,
    padding: 15,
  },
  Input: {
    borderWidth: 1,
    width: 270,
    height: 40,
    marginTop: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 8,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: '#fff',
  },
  button: {
    borderWidth: 2,
    width: 270,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    marginTop: 25,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    backgroundColor: '#fff',
  },
});

export default AuthForm;
