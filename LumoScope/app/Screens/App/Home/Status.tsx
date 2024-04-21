import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Container, Footer, Header, LightCard, StackedBarChart, Text } from '../../../../components'
import colors from '../../../../constants/Colors'
import { layout } from '../../../../constants'


const Status = () => {
  return (
    <View style={styles.container}>
      <Header title='Power Status' />

      <View style={styles.content}>
        <View style={{ marginTop: 20 }}>
          <LightCard light duration={2} location='Oba Ile, Akure' />
        </View>
        <View style={{ marginTop: 30 }}>
          <Text style={{ textAlign: 'center' }} fontSize={14} fontWeight='700'>Last 7 days of Power Supply History</Text>
        </View>
        <StackedBarChart />
      </View>
      <Footer />
    </View>
  );
}

export default Status

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
  },
});