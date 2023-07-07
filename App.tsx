import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import 'react-native-gesture-handler';
import PublicScreen from './src/screens/public/PublicScreen';
import UserScreen from './src/screens/user/UserScreen';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={'Public'} component={PublicScreen} />
        <Stack.Screen name={'User'} component={UserScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
