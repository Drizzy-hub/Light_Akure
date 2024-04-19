import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Text } from '../../../../components'
import { Icons } from '../../../../assets/Icons'
import colors from '../../../../constants/Colors'
import { Status } from '../Data/test'
import { layout } from '.'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes, ClientRoutes } from '../../../Navigation'
import { useStackNavigationProp } from '../../../Navigation/types/types'

export interface LightCard {
  light: boolean,
  location: string,
  duration: number,
  faulty?: boolean
}
const LightCard = ({ light, location, faulty, duration }: LightCard) => {
  const navigation = useNavigation<useStackNavigationProp<AppRoutes, 'ClientStack'>>();
  return (
    <TouchableOpacity onPress={() => { navigation.navigate('ClientStack', { screen: 'Status' }) }}>
      <View style={styles.container}>
        <View>
          <Text style={{ marginBottom: 13 }} fontSize={14} fontWeight='700'>{location}</Text>
          <Text fontSize={12} fontWeight='400'>Duration of Availability: {duration} hours</Text>

          {faulty ? <Text color={colors.red} style={{ marginTop: 8 }} fontSize={10} fontWeight='300'>Faulty</Text> : ''}
        </View>
        <View>
          {light ? <Icons size={40} name='light-on' /> : <Icons size={40} name='light-off' />}
        </View>
      </View>
    </TouchableOpacity>
  )
}
const LightStatusComp = () => {
  return (
    <>
      <FlatList
        style={{ height: layout.window.height / 3 }}
        data={Status}
        keyExtractor={(_, i) => i.toString()}
        horizontal={false}
        ItemSeparatorComponent={<View style={{ marginTop: 10, marginBottom: 10, borderWidth: 1, borderColor: colors.borderSep }} />}
        renderItem={({ item, index }) => {
          return (
            <LightCard light={item.light} location={item.location} duration={item.duration} faulty={item.faulty} />
          )
        }}
      />
    </>
  )
}
export default LightStatusComp


const styles = StyleSheet.create({
  container: {
    borderColor: 'rgba(2, 44, 78, 0.2)',
    borderWidth: 1,
    borderStyle: 'dashed',
    justifyContent: "space-between",
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10

  }
})