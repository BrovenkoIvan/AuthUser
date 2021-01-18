import ConnectyCube from 'react-native-connectycube';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SIGNIN, SIGNOUT, SETCURRENTUSER} from './types';

export const signin = (login, password) => async (dispatch) => {
  const params = {
    login: login,
    password: password,
  };
  const session = await ConnectyCube.createSession(params);
  setDada(session);
  dispatch({type: SIGNIN, payload: session});
};

const setDada = async (session) => {
  try {
    await AsyncStorage.setItem('currentUser', JSON.stringify(session));
  } catch (error) {
    console.log(error);
  }
};

export const setUser = (user) => (dispatch) => {
  dispatch({type: SETCURRENTUSER, payload: user});
};

export const signOut = () => async (dispatch) => {
  await AsyncStorage.removeItem('currentUser');
  dispatch({type: SIGNOUT});
  await ConnectyCube.logout();
};
