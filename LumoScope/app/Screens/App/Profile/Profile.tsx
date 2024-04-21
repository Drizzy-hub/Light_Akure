import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, Container, FormInput, Header, Text } from '../../../../components'
import colors from '../../../../constants/Colors'

const Profile = () => {
  return (
    <Container>
      <Header title='Profile' />
      <View style={{ paddingHorizontal: 24, marginTop: 30 }}>
        <View>
          <FormInput
            // value={userData?.name}
            style={styles.textBox}
            placeholder="Name"
          />
          <FormInput
            // value={user?.email}
            placeholder={"Email"}
            style={styles.textBox}
          />
          <FormInput
            // value={userData?.phone}
            placeholder={"Phone Number"}
            style={styles.textBox}
          />
          <FormInput
            // value={userData?.phone}
            placeholder={"Location"}
            style={styles.textBox}
          />

        </View>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: colors.primaryBlue }}>Log out</Text>
          <Text style={{ color: colors.red, marginTop: 10 }}>
            Delete Account
          </Text>
        </View>
        <View style={{ marginTop: 30 }}>
          <Button style={{ borderRadius: 15 }} onPress={() => { }} text={"Update"} />
        </View>
      </View>
    </Container>

  )
}

export default Profile

const styles = StyleSheet.create({
  textBox: {
    marginBottom: 10
  }
})