import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { List } from "react-native-paper"
import { useNavigation} from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

const Menu = () => {
    const navigation = useNavigation();
    const { logout } = useAuth();

    const logoutAccount = () => {
        Alert.alert(
            "Sign Out",
            "Are you sure you want to log out?",
            [
                {
                    text: "No"
                },
                {
                    text: "Yes",
                    onPress: () => logout
                }
            ], {
                cancelable: false
            }
        )
    }

    return (
        <>
        <List.Section>
                <List.Item  
                    title="Sign Out"
                    description="Close"
                    left={(props) => <List.Icon { ...props } 
                    icon="logout" />}
                    onPress={logoutAccount}
                />
        </List.Section>
        </>
    )
}

export default Menu

const styles = StyleSheet.create({

})