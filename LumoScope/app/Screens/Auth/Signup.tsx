import { KeyboardAvoidingView, ScrollView, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProps } from '../../Navigation/types/types'
import { AuthRoutes } from '../../Navigation'
import { Button, Container, Form, FormField, FormInput, Submit, Text } from '../../../components'
import colors from '../../../constants/Colors'
import axios from 'axios';
import { useLoginMutation, useSignupMutation } from '../../../services/auth'
import { handleMutationService } from '../../../services/config/handleService'
import { useAppDispatch } from '../../../store/hooks'
import { setUser } from '../../../store/features/authSlice'

interface SignupModel {
  Phone: string;
  Email: string;
  Name: string;
}

const Signup = ({ navigation }: StackNavigationProps<AuthRoutes, 'Signup'>) => {
  const [completeSignUp, { isLoading }] = useSignupMutation();
  const [completeLogin] = useLoginMutation();
  const dispatch = useAppDispatch()
  const [inputs, setInputs] = useState<SignupModel>({
    Phone: '',
    Email: '',
    Name: '',
  });

  const handleOnchange = (text: string, input: keyof SignupModel) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  const disabled = Object.values(inputs).some((value) => value === '');

  return (

    <Container>
      <ScrollView>
        <KeyboardAvoidingView>
          <View style={styles.container}>
            <Text fontWeight='600' fontSize={24}>Create an account</Text>
            <Text fontWeight='400' fontSize={12} style={{ marginTop: 10 }}>Sign up to unlock personalized features and power status updates</Text>
            <View style={styles.form}>
              <Form
                initialValues={{
                  Name: '',
                  Phone: '',
                  Email: '',

                }}
                onSubmit={(value) => {
                  handleMutationService({
                    mutation: completeSignUp({
                      Email: value.Email || '',
                      Phone: value.Phone || '',
                      Name: value.Name || ''
                    }),
                    onSuccess(data) {
                      if (data.success) {
                        handleMutationService({
                          mutation: completeLogin({
                            phone: value.Phone || '',
                          }),
                          onSuccess(data) {
                            dispatch(setUser(data))
                          }

                        })
                      }
                    },
                  });

                }}>
                <FormField
                  onTextChange={(text) => handleOnchange(text, 'Name')}
                  label='Name'
                  name='Name'
                  placeholder='Input your name'
                />
                <FormField
                  onTextChange={(text) => handleOnchange(text, 'Email')}
                  label='Email'
                  name='Email'
                  placeholder='Input your Email'
                />

                <FormField
                  onTextChange={(text) => handleOnchange(text, 'Phone')}
                  placeholder='Input your phone number'
                  label='Phone Number'
                  name='Phone'

                />
                <Submit disabled={disabled} style={styles.btn} loading={isLoading} text="Submit" />
              </Form>
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
        </KeyboardAvoidingView>
      </ScrollView>
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
