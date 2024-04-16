import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackNavigationProps } from '../../../Navigation/types/types'
import { AppRoutes, ClientRoutes } from '../../../Navigation'

const Dashboard = ({ navigation }: StackNavigationProps<ClientRoutes, 'Dashboard'>) => {
  return (
    <View>
      <Text>Dashboard</Text>
    </View>
  )
}

export default Dashboard

const styles = StyleSheet.create({})