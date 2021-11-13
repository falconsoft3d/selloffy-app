import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import colors from '../styles/colors';
import Home from "../screens/Product/Home";
import Product from "../screens/Product/Product"

const Stack = createStackNavigator();

const ProductStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerTintColor: colors.fontLight,
            headerStyle: {backgroundColor : colors.bgDark} ,
            cardStyle: {backgroundColor : colors.bgLight}
        }}
        >
            <Stack.Screen
                name="home"
                component={Home}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name="product"
                component={Product}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>

    )
}

export default ProductStack

const styles = StyleSheet.create({})
