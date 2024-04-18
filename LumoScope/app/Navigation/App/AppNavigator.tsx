import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { AppRoutes } from '../types';
import { ClientNavigator } from './Stacks';
import { AuthStack } from '../Auth';
import { OnboardingStack } from '../Onboard';
import { AuthUserContext, OnboardUserContext } from '../../Contexts';
import { Login, Signup } from '../../Screens';
// import { OnboardUserContextData } from '../../Contexts/OnboardedContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { OnboardUserContextData } from '../../Contexts/OnboardedContext';

const { Navigator, Screen, Group } = createStackNavigator<AppRoutes>();
const AppNavigator = () => {
  const { onboarded } = useContext(OnboardUserContext)
  console.log(onboarded, 'state')
  const user = useContext(AuthUserContext);
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      {!user ? (
        <Group>
          <Screen name="ClientStack" component={ClientNavigator} />
        </Group>
      ) : onboarded ? (
        <Group>
          <Screen name="AuthStack" component={AuthStack} />
        </Group>

      ) : (
        <Group>
          <Screen name="OnboardingStack" component={OnboardingStack} />
        </Group>
      )}
    </Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})



