import { View, StyleSheet, ImageBackground, FlatList, ImageRequireSource } from 'react-native'
import React from 'react'
import { Text } from '../../../../components'
import colors from '../../../../constants/Colors'
import { New } from '../Data/test'
// import { layout } from '.'

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const layout = {
  cards: {
    announcementCard: width - 16 * 13,
    cardRadius: 0,
    cardSize: 120,
    genreHeight: 90,
    trackHeight: 0,
    walletHeight: 120,
    walletRadius: 8,
    walletWidth: width - 16 * 4,
  },
  window: {
    height,
    width,
  },
};

interface Props {
  marginRight?: number;
  item: string;
  uri: ImageRequireSource
}
const Cards = ({ marginRight, item, uri }: Props) => {
  return (
    <View style={[styles.container, { marginRight }]}>
      <ImageBackground style={styles.card} source={uri}>
        <Text style={{ paddingHorizontal: 9, textAlign: 'left', marginTop: 62 }} fontSize={10} fontWeight='600' color={colors.white}>{item}</Text>
      </ImageBackground>
    </View>
  )
}
const CardView = () => {
  return (
    <>
      <FlatList
        data={New}
        decelerationRate="fast"
        snapToInterval={layout.cards.walletWidth + 16}
        keyExtractor={(_, i) => i.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<View style={{ width: 16 }} />}
        ListFooterComponent={<View style={{ width: 16 }} />}
        renderItem={({ item, index }) => {
          const last = index === New.length - 1;
          return (
            <Cards item={item.label} marginRight={last ? 0 : 16} uri={item.uri} />
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