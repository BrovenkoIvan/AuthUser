import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {signOut} from '../redux/actions';
const ShowUserProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);
  console.log('currentUser',currentUser)
  return (
    <View>
       <Text>{currentUser.user.full_name}</Text>
      <Button title='signout' onPress={() => dispatch(signOut())}/>
    </View>
  );
};
export default ShowUserProfile;
