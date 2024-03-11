import { StyleSheet, Text, View, StatusBar } from 'react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as MetroApi from './model/MetroApi'
import React, { useEffect } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import Navigation from './app/Navigation';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} backgroundColor="#222231" />
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
