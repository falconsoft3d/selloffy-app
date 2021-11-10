import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SaleOrder = () => {
    return (
        <View style={styles.containers}>
            <Text>Sale Order</Text>
        </View>
    )
}

export default SaleOrder

const styles = StyleSheet.create({
    containers : {
        flex: 1,
        justifyContent : 'center',
        alignItems : 'center'
    }
})
