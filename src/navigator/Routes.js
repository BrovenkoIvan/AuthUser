import React, {useState, useEffect} from 'react';
import ProfileStack from './ProfileStack';
import AuthStack from './AuthStack';
import {NavigationContainer} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {setUser} from '../redux/actions';

const Routes = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.currentUser);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const value = await AsyncStorage.getItem('currentUser');
    if (value !== null) {
      const user = JSON.parse(value);
      dispatch(setUser(user));
    }
  };

  return (
    <NavigationContainer>
      {user ? <ProfileStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;
