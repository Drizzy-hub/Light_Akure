import { FlatList, StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import { StackNavigationProps } from '../../../Navigation/types/types'
import { AppRoutes, ClientRoutes } from '../../../Navigation'
import { Container, Footer, Form, FormPicker, Text } from '../../../../components'
import { Icons } from '../../../../assets/Icons'
import { Locations } from './Locations'
import Cards from './Cards'
import colors from '../../../../constants/Colors'
import { New } from '../Data/test'
// import { layout } from '.'
import CardView from './Cards'
import LightStatusComp from './LightCard'

interface Inputs {
  location: string;

}


const Dashboard = ({ navigation }: StackNavigationProps<ClientRoutes, 'Dashboard'>) => {
  const [inputs, setInputs] = useState<Inputs>({
    location: ''
  });
  const handleOnchange = (text: string, input: keyof Inputs) => {
    setInputs((prevState) => ({ ...prevState, [input]: text }));
  };
  return (
    <Container>
      <View style={styles.container}>
        <View style={styles.header}>
          <View>
            <Text fontSize={14} fontWeight='700'>Welcome to Lumoscape!</Text>
            <View style={{ alignItems: 'center', flexDirection: 'row' }}>
              <Text fontSize={14} fontWeight='400'>Good afternoon samuel </Text><Icons size={12} name='waving' />
            </View>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icons size={24} name='light-availability' />
            <Icons onPress={() => navigation.navigate('Profile')} size={24} style={{ marginLeft: 10 }} name='settings' />
          </View>
        </View>
        <View style={{ marginTop: 24 }}>
          <Form
            initialValues={{
              deviceType: '',
              referenceId: '',
              terminalId: '',
            }}
            onSubmit={(values) => {
              console.log(values)
            }}
          >
            <FormPicker onSelectItem={(item) => handleOnchange(item.value, 'location')} items={Locations} name='Location' LeftComponent={<Icons size={24} name='location' />} placeholder='Location' />
          </Form>
        </View>
      </View>

      <View style={{ marginTop: 24 }}>
        <View style={styles.heading}>
          <Text fontSize={14} fontWeight='700'>City Buzz</Text>
          <Text onPress={() => navigation.navigate('CityBuzz')} fontSize={12} color={colors.primaryBlue} fontWeight='600'>See more</Text>
        </View>
        <View>
          <CardView />
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ marginTop: 33 }}>
          <Text fontSize={14} style={{ marginBottom: 16 }} fontWeight='700'>Power Status in Nearby Areas</Text>
          <LightStatusComp />
        </View>
      </View>
      <Footer />
    </Container>
  )
}

export default Dashboard

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 14,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  heading: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    marginBottom: 16,
    justifyContent: 'space-between'
  },
})