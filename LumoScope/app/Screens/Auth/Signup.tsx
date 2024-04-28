import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProps } from '../../Navigation/types/types'
import { AuthRoutes } from '../../Navigation'
import { Button, Container, FormInput, Text } from '../../../components'
import colors from '../../../constants/Colors'
import { useSignupMutation } from '../../../services/auth'
import { handleMutationService } from '../../../services/config/handleService'


const Signup = ({ navigation }: StackNavigationProps<AuthRoutes, 'Signup'>) => {
  const [completeSignUp, { isLoading }] = useSignupMutation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleChange = (fieldName: string, value: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };


  return (
    <Container>
      <View style={styles.container}>
        <Text fontWeight='600' fontSize={24}>Create an account</Text>
        <Text fontWeight='400' fontSize={12} style={{ marginTop: 10 }}>Sign up to unlock personalized features and power status updates</Text>
        <View style={styles.form}>
          <FormInput
            placeholder='Input your name'
            label='Name'
            value={formData.name}
            onChangeText={(text) => handleChange('name', text)}
          />
          <FormInput
            placeholder='Input your Mail'
            label='Email'
            value={formData.email}
            onChangeText={(text) => handleChange('email', text)}
          />
          <FormInput
            placeholder='Input your phone number'
            label='Phone Number'
            value={formData.phone}
            onChangeText={(text) => handleChange('phone', text)}
          />
          <Button style={styles.btn} onPress={() => {
            handleMutationService({
              mutation: completeSignUp({
                email: formData.email,
                phone: formData.phone,
                name: formData.name
              }),
              onSuccess(data) {
                console.log(data)
              },
            });
          }} text='Submit' />
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
  );
};

export default Signup;

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
});
