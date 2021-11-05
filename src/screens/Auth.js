import { Platform } from 'expo-modules-core';
import React from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import logo from "../../assets/selloffy.png"
import RegisterForm from "../components/Auth/RegisterForm";
import { layoutStyle } from '../styles';
import colors from '../styles/colors'

const Auth = () => {
    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo}  source={logo}/>
            
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                <RegisterForm/>
            </KeyboardAvoidingView>

            <View style={{marginTop:20}}>
                <Text style={styles.textcenter}>sell offline with your ERP</Text>
                <Text style={styles.textcenter}>By Marlon Falcon / V 0.0.1</Text>
            </View>
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
    },
    textcenter :{
        textAlign: "center",
        color: colors.fontgray,
    }
})
