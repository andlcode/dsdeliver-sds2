import React from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import Header from './src/components/header'
import AppLoading from 'expo-app-loading';
import { StatusBar }from 'expo-status-bar'
import Home from './src/components/home';


export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_700Bold
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <View style={styles.container}>
      <Header/>
      <StatusBar style="auto"/>
      <Home /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

   
}); 

