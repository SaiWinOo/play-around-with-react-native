import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Category from './Category';
const HomeScreen = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={'Category'} component={Category} />
    </Stack.Navigator>
  );
};

export default HomeScreen;
