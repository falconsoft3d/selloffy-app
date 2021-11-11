import React from 'react'
import { StyleSheet, Alert } from 'react-native'
import { List } from "react-native-paper"
import { useNavigation} from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";

const Menu = () => {
    const navigation = useNavigation();
    const { logout, syncUpdate } = useAuth();

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
                    onPress: () => logout()
                }
            ], {
                cancelable: false
            }
        )
    }

    const SyncUp = () => {
        Alert.alert(
            "Sync Up",
            "Are you sure you want to Sync Up?",
            [
                {
                    text: "No"
                },
                {
                    text: "Yes",
                    onPress: () => syncUpdate()
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
                    title="Sync Up"
                    description="Uptade your data"
                    left={(props) => <List.Icon { ...props } 
                    icon="update" />}
                    onPress={()=>SyncUp()}                    
                />


                <List.Item
                    title="Sign Out"
                    description="Close your session"
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