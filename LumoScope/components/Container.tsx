import { StyleSheet, Text, View } from 'react-native'
import useHeaderHeight from '../hooks/getHeight';


const Container = ({ children }: { children: React.ReactNode }) => {
  const { insets } = useHeaderHeight();
  return (
    <View>
      <View style={{ height: insets.top }} />
      {children}
    </View>
  )
}

export default Container
