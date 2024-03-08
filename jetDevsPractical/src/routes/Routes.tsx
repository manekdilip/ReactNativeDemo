import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../Screens/auth/Login';
import {isReadyRef, navigationRef} from 'react-navigation-helpers';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

export function Routes() {
  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        isReadyRef.current = true;
      }}>
      <Stack.Navigator screenOptions={{headerShown: true}}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          options={{headerShown: false}}
          name="BottomTab"
          component={BottomTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
