import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Favorites = () => {
    return (
        <View style={styles.containers}>
            <Text>Estamos en la Favorites</Text>
        </View>
    )
}

export default Favorites

const styles = StyleSheet.create({
    containers : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
