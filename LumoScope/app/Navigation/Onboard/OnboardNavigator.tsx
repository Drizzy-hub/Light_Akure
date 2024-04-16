
import { createStackNavigator } from '@react-navigation/stack';
import { OnboardOne } from '../../Screens';

const { Navigator, Screen, } = createStackNavigator();

export default function OnboardNavigator(): JSX.Element {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="OnboardOne" component={OnboardOne} />
    </Navigator>
  );
}
