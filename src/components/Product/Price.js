import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import colors from '../../styles/colors';

const Price = (props) => {
    const { product } = props
    return (
        <View>
            <Text style={styles.price}>
                Price: {product.lst_price.toFixed(2).replace(".",",") } { product.currency_id[1] === 'EUR' && "€" }
            </Text>
            {/* <Text style={styles.price}>Price: {price.toFixed(2)}</Text> */}
        </View>
    )
}

export default Price

const styles = StyleSheet.create({
    price :{
        fontWeight : "bold",
        fontSize: 20,
        color: colors.bgPink,
    },
})
