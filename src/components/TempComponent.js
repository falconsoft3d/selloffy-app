import React from 'react';
import { View, Text } from 'react-native';
import { Provider as PaperProvider, DefaultTheme, Button } from "react-native-paper";

const TempComponent = ({auth}) => {
    return (
        <View style={{ textAlign: 'center', marginTop: 200}}>
            <Text>Zona de Usuario: {auth.token.username}</Text>
            <Button icon="camera" mode="contained" onPress={() => logout()  }>
                Cerrar
            </Button>
        </View>
    )
}

export default TempComponent
