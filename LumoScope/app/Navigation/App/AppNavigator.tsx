import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../types';
import { ClientNavigator } from './Stacks';




const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();
const AppNavigator = () => {
  return (
    <Navigator screenOptions={{ headerShown: true }}>
      <Group>
        <Screen name="ClientStack" component={ClientNavigator} />
      </Group>
    </Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})



