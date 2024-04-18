import { StyleSheet, View } from 'react-native'
import React from 'react'
import { AuthRoutes } from '../../Navigation'
import { StackNavigationProps } from '../../Navigation/types/types'
import { Button, Container, FormInput, Text } from '../../../components'
import colors from '../../../constants/Colors'

const Login = ({ navigation }: StackNavigationProps<AuthRoutes, 'Login'>) => {
  return (
    <Container>
      <View style={styles.container}>
        <Text fontSize={24} fontWeight='600'>Login</Text>
        <Text style={{ marginTop: 10 }} color={colors.primaryTextColor} fontSize={12} fontWeight='400'>Sign in with your Phone number or email</Text>
        <View style={styles.form}>
          <FormInput placeholder='Enter Mail or Phone Number' label='Email (Phone Number)' />
          <Button style={styles.btn} onPress={() => { }} text='Login' />
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
            <Text fontSize={12} fontWeight="700">
              You don't have an account?
            </Text>
            <Text
              onPress={() => {
                navigation.navigate("Signup");
              }}
              fontSize={12}
              style={{ color: colors.primaryBlue, marginLeft: 4 }}
            >
              SignUp
            </Text>
          </View>
        </View>
      </View>

    </Container>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 47,
  },
  form: {
    marginTop: '30%'
  },
  btn: {
    borderRadius: 20,
    marginTop: '5%'
  }
})