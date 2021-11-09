import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

const UserInfo = (props) => {
    const { user } = props;
    console.log(user)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>User Account,</Text>
            <Text style={styles.titleName}>
                {user.username}
            </Text>
            {/* <Text style={styles.titleName}>
                Id: {user.id}
            </Text>
            <Text style={styles.titleName}>
                Url: {user.url}
            </Text>
            <Text style={styles.titleName}>
                database: {user.database}
            </Text> */}
        </View>
    )
}

export default UserInfo;

const styles = StyleSheet.create({
    container: {
        height: 100,
        justifyContent: 'center',
        padding: 20,
        marginTop: 20,
    },
    title :{
        fontSize: 20
    },
    titleName : {
        fontSize: 20,
        fontWeight: "bold"
    }
})