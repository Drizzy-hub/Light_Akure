import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AuthRoutes } from '../../Navigation'
import { StackNavigationProps } from '../../Navigation/types/types'

const Login = ({ navigation }: StackNavigationProps<AuthRoutes, 'Login'>) => {
  return (
    <View>
      <Text>Login</Text>
    </View>
  )
}

export default Login

const styles = StyleSheet.create({})