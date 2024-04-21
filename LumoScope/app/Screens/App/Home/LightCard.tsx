import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LightCard, Text } from '../../../../components'
import { Icons } from '../../../../assets/Icons'
import colors from '../../../../constants/Colors'
import { Status } from '../Data/test'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes, ClientRoutes } from '../../../Navigation'
import { useStackNavigationProp } from '../../../Navigation/types/types'
import { layout } from '../../../../constants'

const LightStatusComp = () => {
  return (
    <>
      <FlatList
        style={{ height: layout.window.height / 3 }}
        data={Status}
        keyExtractor={(_, i) => i.toString()}
        horizontal={false}
        ItemSeparatorComponent={() => <View style={{ marginTop: 10, marginBottom: 10, borderWidth: 1, borderColor: colors.borderSep }} />}
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


