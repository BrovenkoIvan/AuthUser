import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ShowUserProfile from '../screens/ShowUserProfile';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" component={ShowUserProfile} />
    </Stack.Navigator>
  );
};

export default AuthStack;
