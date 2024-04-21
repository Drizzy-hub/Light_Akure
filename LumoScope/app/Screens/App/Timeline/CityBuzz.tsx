import { FlatList, Image, ImageRequireSource, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Header, Text } from '../../../../components'
import colors from '../../../../constants/Colors'
import { NewsPaths } from './Data'
// import { layout } from '../Home'
import { Icons } from '../../../../assets/Icons'
import { layout } from '../../../../constants'


interface Props {
  heading: string,
  subtitle: string,
  uri: ImageRequireSource
}

const CityBuzz = () => {
  const NewsCard = ({ heading, subtitle, uri }: Props) => {
    return (
      <View style={{ paddingHorizontal: 23, backgroundColor: colors.white, marginBottom: 10 }}>
        <Text style={{ marginTop: 15, marginBottom: 10 }} fontWeight='600' fontSize={14}>
          {heading}
        </Text>
        <Text style={{ marginBottom: 15 }} fontWeight='400' fontSize={12}>{subtitle}</Text>
        <Image source={uri} style={{ width: '100%', marginBottom: 17, borderRadius: 8 }} />
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Icons style={{ marginBottom: 20, }} name='share' />
        </TouchableOpacity >
      </View>
    )
  }
  return (
    <Container>
      <Header subtitle='Stay Updated with the Latest Happenings' title='City Buzz' />
      <View style={styles.container}>
        <FlatList
          style={{ height: layout.window.height / 1.2 }}
          data={NewsPaths}
          keyExtractor={(_, i) => i.toString()}
          horizontal={false}
          renderItem={({ item, index }) => {
            return (
              <NewsCard uri={item.image} subtitle={item.subtitle} heading={item.heading} />
            )
          }}
        />
      </View>
    </Container>
  )
}

export default CityBuzz

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buzzBg,
  }
})