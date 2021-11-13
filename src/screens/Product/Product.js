import React, {useState} from 'react'
import StatusBar from '../../components/StatusBar';
import colors from '../../styles/colors';
import Search from "../../components/Search";
import { StyleSheet, Text, View } from 'react-native'
import { ScrollView, Image } from 'react-native';
import defaultproduct from "../../../assets/default-product.png";
import Price from "../../components/Product/Price";
import Quantity from "../../components/Product/Quantity";
import Buy from "../../components/Product/Buy";

const Product = (props) => {
const { route } = props;
const { params } = route;
const { product } = params;
const [quantity, setQuantity] = useState(1);

    return (
        <>
            <StatusBar  backgroundColor={colors.bgPink} barStyle="light-content" />
            <Search/>
            <ScrollView style={styles.container}>
            
                <Text style={styles.name}>{product.name}</Text>

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
                <View style={styles.info}>
                    <View style={styles.div50}>
                        <Text style={styles.text}>Code: {product.code}</Text>
                        <Price product={product} />
                        <Text style={styles.text}>Stock: {product.qty_available}</Text>
                        <Text style={styles.text}>Barcode: {product.barcode}</Text>
                    </View>
                    <View style={styles.div50}>
                        <Quantity quantity={quantity} setQuantity={setQuantity}/>
                    </View>  
                </View>
                <Buy product={product} quantity={quantity} />
                
                

            </ScrollView>
        </>
    )
}

export default Product

const styles = StyleSheet.create({
    container: {
        padding: 10,
        paddingBottom: 50
    },
    name :{
        fontWeight : "bold",
        fontSize: 20,
        marginBottom: 20
    },
    text :{
        fontWeight : "bold",
        fontSize: 20,
    },
    image: {
        height: 350,
        width: "100%",
        marginBottom: 10,
        borderRadius: 5
      },
    info : {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    div50 : {

    }
})
