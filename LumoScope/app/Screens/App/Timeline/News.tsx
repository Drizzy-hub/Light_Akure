import { FlatList, Image, ImageRequireSource, ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Container, Header, Text } from '../../../../components'
import colors from '../../../../constants/Colors'
import { NewsPaths } from './Data'
// import { layout } from '../Home'
import { Icons } from '../../../../assets/Icons'
import { layout } from '../../../../constants'
import { StackNavigationProps } from '../../../Navigation/types/types'
import { ClientRoutes } from '../../../Navigation'
import { TimelineData, useGetTimelineByIdQuery } from '../../../../services/auth'


interface Props {
  heading: string,
  subtitle: string,
  uri: string
}

const News = ({ navigation, route }: StackNavigationProps<ClientRoutes, 'News'>) => {
  const { params } = route;
  const id = params.id
  const { data, isLoading } = useGetTimelineByIdQuery({ id });


  const NewsCard = ({ heading, subtitle, uri }: Props) => {
    const cleanSubtitle = subtitle.replace(/[\r\n]+/g, ' ');
    return (
      <ScrollView style={{ paddingHorizontal: 23, height: '100%', backgroundColor: colors.white, marginBottom: 10, flex: 1 }}>
        <Text style={{ marginTop: 15, marginBottom: 10 }} fontWeight='600' fontSize={14}>
          {heading}
        </Text>
        <Text style={{ marginBottom: 15 }} fontWeight='400' fontSize={12}>{cleanSubtitle}</Text>
        <Image source={{ uri }} style={{ width: '100%', height: 200, marginBottom: 17, borderRadius: 8 }} />
        <TouchableOpacity style={{ alignItems: 'center' }}>
          <Icons style={{ marginBottom: 20, }} name='share' />
        </TouchableOpacity >
      </ScrollView>
    )
  }
  return (

    <Container>
      <ScrollView style={{ flex: 1 }}>
        <Header subtitle='Stay Updated with the Latest Happenings' title='City Buzz' />
        <View style={styles.container}>
          {isLoading ? (
            <Text>Loading...</Text>
          ) : data ? (
            <NewsCard
              key={data?.data?.id}
              uri={`http://192.168.0.102/lumoscope/${data?.data.image_path}`}
              subtitle={data?.data.description}
              heading={data?.data.title}
            />
          ) : (
            <Text>No data available</Text>
          )}
        </View>
      </ScrollView>
    </Container>

  )
}

export default News

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.buzzBg,
  }
})