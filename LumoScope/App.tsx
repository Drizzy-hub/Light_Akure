import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useContext } from 'react';
import { AuthProvider, AuthUserContext, OnboardProvider, OnboardUserContext } from './app/Contexts';
import { AppNavigator, AuthNavigator, OnboardNavigator } from './app/Navigation';


export default function App() {
  const onboarded = useContext(OnboardUserContext);
  const user = useContext(AuthUserContext);
  return (

    <NavigationContainer>
      <OnboardProvider>
        <AuthProvider>
          <SafeAreaProvider>
            {!user ? <AppNavigator /> : !onboarded ? <AuthNavigator /> : <OnboardNavigator />}
          </SafeAreaProvider>
        </AuthProvider>
      </OnboardProvider>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
