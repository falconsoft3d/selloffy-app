import React from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { map } from "lodash"
import defaultproduct from "../../../assets/default-product.png";
import { useNavigation } from "@react-navigation/native";

const ListProduct = (props) => {
    const { products } = props;
    const navigation = useNavigation();

    const goToProduct = (id) => {
        navigation.push("product", { idProduct: id });
    };
    

    return (
        
        <View style={styles.container}>
            { products && map(products, (product) => (
                <TouchableWithoutFeedback key={product.id}
                    onPress={() => goToProduct(product.id)}
                >
                    <View style={ styles.containerProduct}>
                        <View style={ styles.product}>
                            <Image
                                style={styles.image}  
                                source={defaultproduct}
                            />
                            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                                Code: {product.code}
                            </Text>
                            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                                {product.name}
                            </Text>
                            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                                Price: {product.lst_price}
                            </Text>
                        </View>
                    </View>

                </TouchableWithoutFeedback>
            ))}

            {!products && <Text>Not Products</Text>   }
        </View>
    )
}

export default ListProduct

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "row",
      flexWrap: "wrap",
      alignItems: "flex-start",
      margin: -3,
    },
    containerProduct: {
      width: "50%",
      padding: 3,
    },
    product: {
      backgroundColor: "#f0f0f0",
      padding: 10,
    },
    image: {
      resizeMode: "contain",
      marginBottom: 10,
      width: "100%",
    },
    name: {
      marginTop: 0,
      fontSize: 15,
    },
  });