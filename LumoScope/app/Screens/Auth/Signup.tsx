import { StyleSheet, View } from 'react-native'
import React from 'react'
import { StackNavigationProps } from '../../Navigation/types/types'
import { AuthRoutes } from '../../Navigation'
import { Button, Container, FormInput, Text } from '../../../components'
import colors from '../../../constants/Colors'

const Signup = ({ navigation }: StackNavigationProps<AuthRoutes, 'Signup'>) => {
  return (
    <Container>
      <View style={styles.container}>
        <Text fontWeight='600' fontSize={24}>Create an account</Text>
        <Text fontWeight='400' fontSize={12} style={{ marginTop: 10 }}>Sign up to unlock personalized features and power status updates</Text>
        <View style={styles.form}>
          <FormInput placeholder='Input your name ' label='Name' />
          <FormInput placeholder='Input your Mail ' label='Email' />
          <FormInput placeholder='Input your phone number ' label='Phone Number' />
          <Button style={styles.btn} onPress={() => { }} text='Submit' />
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
            <Text fontSize={12} fontWeight="700">
              You have an account?
            </Text>
            <Text
              onPress={() => {
                navigation.navigate("Login");
              }}
              fontSize={12}
              style={{ color: colors.primaryBlue, marginLeft: 4 }}
            >
              Login
            </Text>
          </View>
        </View>
      </View>
    </Container>
  )
}

export default Signup

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 47,
  },
  form: {
    marginTop: '20%'
  },
  btn: {
    borderRadius: 20,
    marginTop: '5%'
  }
})