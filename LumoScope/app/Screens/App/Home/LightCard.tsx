import { FlatList, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LightCard, Text } from '../../../../components'
import { Icons } from '../../../../assets/Icons'
import colors from '../../../../constants/Colors'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes, ClientRoutes } from '../../../Navigation'
import { useStackNavigationProp } from '../../../Navigation/types/types'
import { layout } from '../../../../constants'
import { useGetLightQuery } from '../../../../services/auth'
import { calculateTimeDifference } from '../../../../hooks/diffCalculator'

const LightStatusComp = () => {
  const { data, isLoading } = useGetLightQuery();
  const navigation = useNavigation<useStackNavigationProp<AppRoutes, 'ClientStack'>>();
  return (
    <>
      {isLoading ? <Text>Loading..</Text> :
        <FlatList
          style={{ height: layout.window.height / 2.2 }}
          data={data?.data || []}
          keyExtractor={(_, i) => i.toString()}
          horizontal={false}
          ItemSeparatorComponent={() => <View style={{ marginTop: 10, marginBottom: 10, borderWidth: 1, borderColor: colors.borderSep }} />}
          renderItem={({ item, index }) => {
            return (
              <>
                <LightCard press={() => { navigation.navigate('ClientStack', { screen: 'Status', params: { id: item.id ?? '' } }) }} lastSeen={calculateTimeDifference(item.light_end)} light={item.is_light} location={item.location} duration={item.duration} faulty={item.is_faulty} />
              </>
            )
          }}
        />
      }
    </>
  )
}
export default LightStatusComp


