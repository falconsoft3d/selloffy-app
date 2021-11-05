import React, { useState } from 'react';
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Auth from './src/screens/Auth';
import { StyleSheet, Text, View } from 'react-native';
import colors from './src/styles/colors';

export default function App() {
  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary
    },
  };
  
  const [auth, setAuth] = useState(undefined)
  return (
    <PaperProvider theme={theme}>
      {  auth ? <Text>Zona de Usuario</Text> : <Auth/>}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
