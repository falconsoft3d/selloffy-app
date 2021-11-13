import AsyncStorage from "@react-native-async-storage/async-storage";

export async function updateData(formData) {
    try { 
        console.log("data: updateData")
        const result = await downloadProductApi(formData);
        return result;
        
        } catch (error) {
            console.log("Error:", error);
            return null;
        }   
  }


async function downloadProductApi(formData) {
    try {
      // console.log("data: downloadProductApi")
      const products = []
      if (formData.provider === 'odoo') {
        const url = formData.url+"/jsonrpc/";
        const jsonRPC = {
            "jsonrpc": "2.0",
            "method": "call",
            "params": {"service": "object", "method": "execute", 
            "args": [formData.database , formData.id, formData.password, 
                    "product.product", "search_read", [], 
                    ["name","id","code","barcode",
                    "lst_price","standard_price","currency_id",
                    "type","qty_available","image_128"]]}
        }

        // "image_256"

        const params = {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonRPC),
        };
        const response = await fetch(url, params);
        const result = await response.json();
        
        console.log("============= ::: ===== ")
        console.log(result.result);
        
        await AsyncStorage.setItem("PRODUCT", JSON.stringify(result.result));

        return result;
      }
    } catch (error) {
      console.log("Error:", error);
      return null;
    }
  }