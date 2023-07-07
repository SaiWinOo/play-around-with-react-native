import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Category from './CategoryScreens/Category';
import Library from './Library';
import HomeScreen from './HomeScreens/HomeScreen';
import ProfileScreen from './ProfileScreens/ProfileScreen';

const UserScreen = () => {
  const Tap = createBottomTabNavigator();
  return (
    <Tap.Navigator
      screenOptions={{
        tabBarStyle: {backgroundColor: 'white'},
        tabBarActiveTintColor: '#04bcc4',
        headerTitleAlign: 'center',
      }}>
      <Tap.Screen
        options={{
          headerShown: false,
        }}
        name={'HomeScreen'}
        component={HomeScreen}
      />
      <Tap.Screen
        options={{
          headerTitle: 'All Categories',
        }}
        name={'Category'}
        component={Category}
      />
      <Tap.Screen name={'Library'} component={Library} />
      <Tap.Screen name={'Profile'} component={ProfileScreen} />
    </Tap.Navigator>
  );
};

export default UserScreen;
