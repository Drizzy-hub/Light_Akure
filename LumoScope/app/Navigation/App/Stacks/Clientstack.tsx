import { createStackNavigator } from '@react-navigation/stack';
import { Dashboard } from '../../../Screens';
import { ClientRoutes } from '../../types';

const { Navigator, Screen, Group } = createStackNavigator<ClientRoutes>();

export default function ClientNavigator() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="Dashboard" component={Dashboard} />
    </Navigator>
  );
}
