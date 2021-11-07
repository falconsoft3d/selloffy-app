import React, { useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput, Button } from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from "yup";
import { formStyle } from "../../styles";
import Toast from "react-native-root-toast";
import { registerApi } from "../../api/auth";

const OdooRegisterForm = (props) => {
    const { setapiRegister } = props
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        onSubmit: async (formData) => {
            setLoading(true)
            try {
                formData.provider = 'odoo';
                const response = await registerApi(formData);
                if (!response.result === false ) {
                    console.log("== Login ==")
                    console.log("User ID: " + response.result)
                } else {
                    throw new Error("Password or user incorect");
                }
                console.log(response)
            } catch (error) {
                setLoading(false)
                Toast.show("Password,url or user incorect", {
                    position: Toast.positions.CENTER,
                  });
            }
            setLoading(false)
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

            <TextInput
                label="database"
                mode="outlined"
                style={formStyle.input}
                onChangeText={ (text)=>formik.setFieldValue("database", text)}
                value={formik.values.database}
                error={formik.errors.database}
            />

            <Button
                mode="contained"
                style={formStyle.btnSucces}
                onPress={formik.handleSubmit}
                loading={loading}
            >Odoo Register</Button>

         <Button
                style={formStyle.btnText}
                onPress={()=>setapiRegister(true)}
            >Change to Api Register</Button>
        </View>
    )
}

export default OdooRegisterForm;

function initialValues() {
    return {
        username : "",
        password : "",
        url : "",
        database : "",
    }
}

function validationSchema() {
    return {
        username : Yup.string().required(true),
        password : Yup.string().required(true),
        url : Yup.string().required(true),
        database : Yup.string().required(true),
    }
}
