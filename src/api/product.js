import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLastProductApi(limit = 30) {
    try {
        const response = await AsyncStorage.getItem("PRODUCT");
        const result = JSON.parse(response);
        return result
        } catch (error) {
            console.error(error);
            return null;
        }
}