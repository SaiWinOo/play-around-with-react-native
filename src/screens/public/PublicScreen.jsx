import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Start from './Start';
import SignUp from './SignUp';
import Login from './Login';
import ForgetPassword from './ForgetPassword';

const PublicScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Start'}
        options={{headerShown: false}}
        component={Start}
      />
      <Stack.Screen
        name={'signup'}
        options={{headerTitle: 'Create ShowNote Account'}}
        component={SignUp}
      />
      <Stack.Screen
        name={'login'}
        options={{headerTitle: 'Log in ShowNote Account'}}
        component={Login}
      />
      <Stack.Screen
        name={'forget-password'}
        options={{headerTitle: 'Forgot Password'}}
        component={ForgetPassword}
      />
    </Stack.Navigator>
  );
};

export default PublicScreen;
