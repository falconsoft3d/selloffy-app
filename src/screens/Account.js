import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Account = () => {
    return (
        <View style={styles.containers}>
            <Text>Estamos en mi cuenta</Text>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    containers : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
