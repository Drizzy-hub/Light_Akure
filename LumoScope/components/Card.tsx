import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native'
import { useNavigation } from "@react-navigation/native";
import { AppRoutes } from "../app/Navigation";
import { useStackNavigationProp } from "../app/Navigation/types/types";
import { Icons } from "../assets/Icons";
import { Text } from "./Text";
import colors from '../constants/Colors';

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
export default LightCard

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