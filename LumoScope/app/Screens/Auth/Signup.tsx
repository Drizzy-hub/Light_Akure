import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProps } from '../../Navigation/types/types'
import { AuthRoutes } from '../../Navigation'

const Signup = ({ navigation }: StackNavigationProps<AuthRoutes, 'Signup'>) => {
  return (
    <View>
      <Text>Signup</Text>
    </View>
  )
}

export default Signup

const styles = StyleSheet.create({})