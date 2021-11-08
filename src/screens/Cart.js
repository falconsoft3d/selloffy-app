import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Cart = () => {
    return (
        <View style={styles.containers}>
            <Text>Estamos en el carrito</Text>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    containers : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
