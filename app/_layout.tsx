import { Stack } from "expo-router";
import { ThemeProvider } from "styled-components/native";
import theme from '../src/global/styles/theme'
import * as SplashScreen from 'expo-splash-screen'
import { View, StatusBar } from 'react-native';
import { useCallback, useEffect } from 'react';


import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold
} from '@expo-google-fonts/roboto';





export default function RootLayout() {

  const [ fontsLoaded ] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold
  });

  useEffect(()=>{
    async function prepare (){
      await SplashScreen.preventAutoHideAsync();
    }
    prepare()
  }, [])

  const onLayoutRootView = useCallback(
    async () => {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }, [fontsLoaded]
  )
  
  if(!fontsLoaded){
    return null
  }

  return(
    <ThemeProvider theme={theme}>
      <View style={{ flex: 1 }}>
        <StatusBar barStyle={"light-content"} />
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="Start" />
          <Stack.Screen name="Rules" />
          <Stack.Screen name="PlayAlone" />
        </Stack>
      </View>
    </ThemeProvider>
  );
}
