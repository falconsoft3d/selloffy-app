import React, {useState, useEffect,useMemo} from 'react';
import { Provider as PaperProvider, DefaultTheme } from "react-native-paper";
import Auth from './src/screens/Auth';
import { StyleSheet, Text, View } from 'react-native';
import AuthContext from './src/context/AuthContext';
import colors from './src/styles/colors';

export default function App() {

  const [auth, setAuth] = useState(undefined);

  const theme = {
    ...DefaultTheme,
    roundness: 2,
    colors: {
      ...DefaultTheme.colors,
      primary: colors.primary
    },
  };

  useEffect(() => {
      setAuth(null);
  }, []);


  const authData = useMemo(
    () => ({
        auth : null,
        login : null,
        logout : null,
    }),
    [auth]
  );
  
  if(auth === undefined) return null;
  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider theme={theme}>
        {  auth ? <Text>Zona de Usuario</Text> : <Auth/>}
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
