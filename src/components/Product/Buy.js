import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-paper";
import Toast from "react-native-root-toast";
import colors from "../../styles/colors";
// import { addProductCartApi } from "../../api/cart";

export default function Actions(props) {
  const { product, quantity } = props;

  const addProductCart = async () => {
    // const response = await addProductCartApi(product._id, quantity);
    const response = "ok"
    if (response) {
      Toast.show("Product added to cart", {
        position: Toast.positions.CENTER,
      });
    } else {
      Toast.show("ERROR when adding the product to the cart", {
        position: Toast.positions.CENTER,
      });
    }
  };

  return (
    <Button
      mode="contained"
      contentStyle={styles.btnBuyContent}
      labelStyle={styles.btnLabel}
      style={styles.btn}
      onPress={addProductCart}
    >
      Add to cart
    </Button>
  );
}

const styles = StyleSheet.create({
  btnLabel: {
    fontSize: 18,
  },
  btn: {
    marginTop: 20,
  },
  btnBuyContent: {
    backgroundColor: colors.bgPink,
    paddingVertical: 5,
  },
});