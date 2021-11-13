import React, { useCallback } from 'react'
import { StyleSheet, Text, View, Image, TouchableWithoutFeedback } from 'react-native'
import { map } from "lodash"
import defaultproduct from "../../../assets/default-product.png";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import colors from "../../styles/colors";

const ListProduct = (props) => {
    const { products } = props;
    const navigation = useNavigation();

    const goToProduct = (product) => {
        navigation.push("product", { product });
    };
    

    return (
        
        <View style={styles.container}>
            { products && map(products, (product) => (
                <TouchableWithoutFeedback key={product.id}
                    onPress={() => goToProduct(product)}
                >
                    <View style={ styles.containerProduct}>
                        <View style={ styles.product}>
                                {  product.image_128  ?  (
                                    <View style={styles.thumbContainer}>
                                    <Image style={styles.image}
                                            source={{uri: `data:image/png;base64,${product.image_128}`}}/>
                                    </View>
                                ) : (
                                    <View style={styles.thumbContainer}>
                                    <Image style={styles.image}
                                            source={defaultproduct}/>
                                    </View>
                                )}

                            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                                {product.name}
                            </Text>
                            <Text style={styles.fields} numberOfLines={1} ellipsizeMode="tail">
                                Code: { product.code ? product.code : "-"}
                            </Text>
                            
                            <Text style={styles.fieldPrice} numberOfLines={1} ellipsizeMode="tail">
                                Price: {product.lst_price.toFixed(2).replace(".",",") } { product.currency_id[1] === 'EUR' && "€" }
                            </Text>

                            <Text style={styles.fields} numberOfLines={1} ellipsizeMode="tail">
                                Stock: {product.qty_available} UN
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
      padding: 1,
    },
    product: {
      backgroundColor: "#fff",
      padding: 10,
    },
    image: {
      height: 150,
      width: "100%",
      marginBottom: 10,
      borderRadius: 5
    },

    name: {
        marginTop: 0,
        fontSize: 13,
        fontWeight: "bold",
      },
    
    fields: {
      marginTop: 0,
      fontSize: 13,
    },

    fieldPrice: {
        marginTop: 0,
        fontSize: 13,
        color: colors.bgPink,
      },
  });