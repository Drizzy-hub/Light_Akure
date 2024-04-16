import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { Login, Signup } from '../../Screens';
import { AuthRoutes } from '../types';



const { Navigator, Screen, Group } = createStackNavigator<AuthRoutes>();
const AuthNavigator = () => {
  return (
    <Navigator initialRouteName={'Login'} screenOptions={{ headerShown: true }}>
      <Group>
        <Screen name="Login" component={Login} />
        <Screen name="Signup" component={Signup} />
      </Group>
    </Navigator>
  )
}

export default AuthNavigator




