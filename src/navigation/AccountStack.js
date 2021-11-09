import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from "@react-navigation/stack";
import Account from "../screens/Account/Account"
import colors from '../styles/colors';

const Stack = createStackNavigator();

const AccountStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerTintColor: colors.fontLight,
                headerStyle: {backgroundColor : colors.bgDark} ,
                cardStyle: {backgroundColor : colors.bgLight}
            }}
        >
            <Stack.Screen 
                name="account"
                component={Account}
                options={{
                    title: "Account",
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export default AccountStack

const styles = StyleSheet.create({})
