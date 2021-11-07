import React from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";

const ApiRegisterForm = (props) => {
    const { setapiRegister } = props;
    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: (formData) => {
            console.log("Regitro de usuario");
            console.log(formData);
        }
    })

    return (
        <View>
            <TextInput
                label="username"
                style={formStyle.input}
                mode="outlined"
                onChangeText={ (text)=>formik.setFieldValue("username", text)}
                value={formik.values.username}
                error={formik.errors.username}
            />

            <TextInput
                label="password"
                style={formStyle.input}
                mode="outlined"
                secureTextEntry
                onChangeText={ (text)=>formik.setFieldValue("password", text)}
                value={formik.values.password}
                error={formik.errors.password}
            />

            <TextInput
                label="url"
                mode="outlined"
                style={formStyle.input}
                onChangeText={ (text)=>formik.setFieldValue("url", text)}
                value={formik.values.url}
                error={formik.errors.url}
            />

            <Button
                mode="contained"
                style={formStyle.btnSuccesGreen}
                onPress={formik.handleSubmit}
            >Api Register</Button>

         <Button
                style={formStyle.btnText}
                onPress={()=>setapiRegister(false)}
            >Change to Odoo Register</Button>
        </View>
    )
}

export default ApiRegisterForm;

function initialValues() {
    return {
        username : "",
        password : "",
        url : "",
    }
}

function validationSchema() {
    return {
        username : Yup.string().required(true),
        password : Yup.string().required(true),
        url : Yup.string().required(true),
    }
}
