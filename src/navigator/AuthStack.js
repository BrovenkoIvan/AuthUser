import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import UserSignIn from '../screens/UserSignIn';
import UserSignUp from '../screens/UserSignUp';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Signup"
        component={UserSignUp}
        options={{header: () => false}}
      />
      <Stack.Screen
        name="Signin"
        component={UserSignIn}
        options={{header: () => false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
