import { Platform } from 'expo-modules-core';
import React from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import logo from "../../assets/logo.png"
import RegisterForm from "../components/Auth/RegisterForm";
import { layoutStyle } from '../styles';

const Auth = () => {
    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo}  source={logo}/>
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                <RegisterForm/>
            </KeyboardAvoidingView>
        </View>
    )
}

export default Auth

const styles = StyleSheet.create({
    logo : {
        width: "100%",
        height: 50,
        resizeMode: "contain",
        marginBottom: 20,
    }
})
