import React, { useState, useEffect, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { getLastProductApi } from "../../api/product";
import ListProduct from "./ListProduct";
import { useFocusEffect, useNavigation } from "@react-navigation/native"

const NewProducts = () => {
    const [products, setProducts] = useState(null)

    useFocusEffect(
        useCallback(() => {
          (async () => {
            const response = await getLastProductApi()
            setProducts(response)
          })();
        }, [])
      );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Last Products</Text>
            { products && <ListProduct  products={products}/> }
        </View>
    )
}

export default NewProducts

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 20
    },
    title: {
        fontWeight : 'bold',
        fontSize : 20,
        marginBottom: 10
    }
})
