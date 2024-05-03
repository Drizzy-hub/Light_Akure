import { View, StyleSheet, ImageBackground, FlatList, ImageRequireSource, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Text } from '../../../../components'
import colors from '../../../../constants/Colors'
import { New } from '../Data/test'
import { layout } from '../../../../constants'
import { useGetTimelineQuery } from '../../../../services/auth'
import { useNavigation } from '@react-navigation/native'
import { AppRoutes, ClientRoutes } from '../../../Navigation'
import { StackNavigationProps, useStackNavigationProp } from '../../../Navigation/types/types'



interface Props {
  marginRight?: number;
  item: string;
  uri: string;
  press: () => void;
}
const Cards = ({ marginRight, press, item, uri }: Props) => {

  return (
    <TouchableOpacity onPress={press} style={[styles.container, { marginRight }]}>
      <ImageBackground style={styles.card} source={{ uri }}>
        <Text style={{ paddingHorizontal: 9, textAlign: 'left', marginTop: 62 }} fontSize={11} fontWeight='600' color={colors.white}>{item}</Text>
      </ImageBackground>
    </TouchableOpacity>
  )
}
const CardView = () => {
  const { data } = useGetTimelineQuery();
  console.log(data, 'check here')
  const navigation = useNavigation<useStackNavigationProp<AppRoutes, 'ClientStack'>>();
  return (
    <>

      <FlatList
        data={data?.data || []}
        decelerationRate="fast"
        snapToInterval={layout.cards.walletWidth + 16}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<View style={{ width: 16 }} />}
        ListFooterComponent={<View style={{ width: 16 }} />}
        ListEmptyComponent={<Text style={{ paddingLeft: 10 }}>News not available</Text>}
        renderItem={({ item, index }) => {
          const last = index === New.length - 1;
          return (
            <Cards press={() => {
              navigation.navigate('ClientStack', { screen: 'News', params: { id: item.id ?? '' } })
            }} item={item.title} marginRight={last ? 0 : 16} uri={`http://192.168.0.102/lumoscope/${item.image_path}`} />
          )
        }} />
    </>
  )
}
export default CardView

const styles = StyleSheet.create({
  container: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 10,

    width: layout.cards.walletWidth,
  },
  card: {
    height: 104,
    alignItems: 'center',
    flexDirection: 'row',

  }


})