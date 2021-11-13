import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from "react-native-paper";
import { formStyle } from "../../styles";

const Quantity = (props) => {
    const { quantity, setQuantity } = props;
    return (
        <View style={styles.viewInput}>
        <TextInput
                label="Quantity"
                style={formStyle.input}
                mode="outlined"
                value={quantity.toString()}
                onChangeText={ (text)=>setQuantity(text)}
            />
        </View>    
      );
}

export default Quantity

const styles = StyleSheet.create({
    viewInput : {
        width: 100
    }    
  });
