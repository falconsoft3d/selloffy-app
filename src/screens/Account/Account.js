import React from 'react'
import { StyleSheet, Text, ScrollView } from 'react-native'
import Search from "../../components/Search";
import colors from '../../styles/colors';
import StatusBar from '../../components/StatusBar'
import useAuth from "../../hooks/useAuth";
import UserInfo from "../../components/Account/UserInfo"
import Menu from '../../components/Account/Menu';

const Account = () => {
    const { auth } = useAuth();
    return (
        <>
            <StatusBar  backgroundColor={colors.bgPink} barStyle="light-content" />
            <Search/>
            <ScrollView>
                <UserInfo user={ auth.token }/>
                <Menu/>
            </ScrollView>
        </>
    )
}

export default Account

const styles = StyleSheet.create({
    containers : {
        
    }
})
