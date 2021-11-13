import AsyncStorage from "@react-native-async-storage/async-storage";
import lodash from "lodash";

export async function addProductCartApi(id, quantity) {
    try {
        console.log("================")
        console.log("ID:", id)
        console.log("Quantity:", quantity)

        let cartLines = []
        const response = await AsyncStorage.getItem("CART");
        const result = JSON.parse(response);

        if (result !== null) {
            cartLines = result
            // cartLines = []
        }

        cartLines.push( {
            id, quantity
        });

        console.log("=========  newArray ==========")
        var holder = {};

        cartLines.forEach(function(d) {
            if (holder.hasOwnProperty(d.id)) {
                holder[d.id] = holder[d.id] + d.quantity;
            } else {
                holder[d.id] = d.quantity;
            }
        });

        var obj2 = [];
        for (var prop in holder) {
            obj2.push({ id: prop, quantity: holder[prop] });
          }

        console.log(obj2)

        await AsyncStorage.setItem("CART", JSON.stringify(obj2));

        // console.log(result)
        // console.log("cartLine: ", cartLines)
        return result

        } catch (error) {
            console.error(error);
            return null;
        }
}