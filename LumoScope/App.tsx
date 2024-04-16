import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useCallback, useContext } from 'react';
import { AuthProvider, AuthUserContext, OnboardProvider, OnboardUserContext } from './app/Contexts';
import { AppNavigator, AuthNavigator, OnboardNavigator } from './app/Navigation';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { fonts } from './constants/fonts';


export default function App() {
  const onboarded = useContext(OnboardUserContext);
  const user = useContext(AuthUserContext);
  const [fontsLoaded, fontError] = useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (

    <SafeAreaProvider onLayout={onLayoutRootView} >
      <NavigationContainer>
        <OnboardProvider>
          <AuthProvider>
            {!user ? <AppNavigator /> : onboarded ? <AuthNavigator /> : <OnboardNavigator />}
          </AuthProvider>
        </OnboardProvider>
      </NavigationContainer>
    </SafeAreaProvider>
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