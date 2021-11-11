import React, {useState, useEffect,useMemo} from 'react';
import { Provider as PaperProvider, DefaultTheme, Button } from "react-native-paper";
import Auth from './src/screens/Auth';
import { StyleSheet, Text, View } from 'react-native';
import AuthContext from './src/context/AuthContext';
import colors from './src/styles/colors';
import { setTokenApi, getTokenApi, removeTokenApi, createToken } from "./src/api/token";
import { updateData } from "./src/api/data"
import TempComponent from "./src/components/TempComponent";
import AppNavigation from './src/navigation/AppNavigation';

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
    (async () => {
        const stringToken = await getTokenApi();
        if(stringToken) {
          const token = JSON.parse(stringToken);
          setAuth({
            token:  token,
            idUser: token.id
          })
        } else {
          setAuth(null);
        }
    })()
  }, []);

  const login = (data) => {
    const token = createToken(data)
    setTokenApi(JSON.stringify(token));
    setAuth({
      token: token,
      idUser: data.id
    })
  }

  const logout = () => {
    if (auth) {
      console.log("App:Logout")
      removeTokenApi();
      setAuth(null);
    }
  };

  const syncUpdate = async () => {
    await updateData(auth.token);
  }


  const authData = useMemo(
    () => ({
        auth,
        login,
        logout,
        syncUpdate,
    }),
    [auth]
  );
  
  if(auth === undefined) return null;

  return (
    <AuthContext.Provider value={authData}>
      <PaperProvider theme={theme}>
        {  auth ? <AppNavigation/> : <Auth/>}
      </PaperProvider>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({});
