import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Price = (props) => {
    const { price } = props
    return (
        <View>
            <Text style={styles.price}>Price: {price.toFixed(2)}</Text>
        </View>
    )
}

export default Price

const styles = StyleSheet.create({
    price :{
        fontWeight : "bold",
        fontSize: 20,
    },
})
