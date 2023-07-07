import React from 'react';
import {Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Settings from './Settings';

const ProfileScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{headerShown: false}}
        name={'settings'}
        component={Settings}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
