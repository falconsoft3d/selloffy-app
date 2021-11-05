import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { formStyle } from "../../styles";
import colors from "../../styles/colors"

const RegisterForm = () => {
    return (
        <View>
            <TextInput
                label="user"
                style={formStyle.input}
                mode="outlined"
            />

            <TextInput
                label="password"
                style={formStyle.input}
                mode="outlined"
                secureTextEntry
            />

            <TextInput
                label="url"
                mode="outlined"
                style={formStyle.input}
            />

            <TextInput
                label="database"
                mode="outlined"
                style={formStyle.input}
            />

            <Button
                mode="contained"
                style={formStyle.btnSucces}
            >Register</Button>
        </View>
    )
}

export default RegisterForm
