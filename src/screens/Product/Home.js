import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import StatusBar from '../../components/StatusBar'
import colors from '../../styles/colors';
import Search from "../../components/Search";

const Home = () => {
    return (
        <>
            <StatusBar  backgroundColor={colors.bgPink} barStyle="light-content" />
            <Search/>
            <Text>Home</Text>
        </>
    )
}

export default Home

const styles = StyleSheet.create({
    containers : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
