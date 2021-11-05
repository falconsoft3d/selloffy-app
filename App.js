import React, { useState } from 'react';
import { Provider as PaperProvider } from "react-native-paper";
import Auth from './src/screens/Auth';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [auth, setAuth] = useState(undefined)
  return (
    <PaperProvider>
      {  auth ? <Text>Zona de Usuario</Text> : <Auth/>}
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});
