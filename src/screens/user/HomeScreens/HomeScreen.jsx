import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Search from './Search';
const HomeScreen = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Home'} component={Home} />
      <Stack.Screen name={'Search'} component={Search} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
