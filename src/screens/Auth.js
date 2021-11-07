import { Platform } from 'expo-modules-core';
import React, { useState } from 'react'
import { StyleSheet, View, Text, Image, KeyboardAvoidingView } from 'react-native';
import logo from "../../assets/selloffy.png"
import OdooRegisterForm from "../components/Auth/OdooRegisterForm";
import ApiRegisterForm from "../components/Auth/ApiRegisterForm";
import { layoutStyle } from '../styles';
import colors from '../styles/colors'

const Auth = () => {
    const [apiRegister, setapiRegister] = useState(false)
    return (
        <View style={layoutStyle.container}>
            <Image style={styles.logo}  source={logo}/>
            
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                {!apiRegister ? <OdooRegisterForm setapiRegister={setapiRegister}/> 
                            : <ApiRegisterForm setapiRegister={setapiRegister}/>}  
            </KeyboardAvoidingView>

            <View style={{marginTop:20}}>
                <Text style={styles.textcenter}>Sell offline with your ERP</Text>
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
