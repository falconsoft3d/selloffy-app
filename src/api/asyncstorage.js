import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH } from "../utils/constants";
// https://yarnpkg.com/package/simplecrypt

export async function setAuthStorage(params) {
    try {
      await AsyncStorage.setItem(AUTH, JSON.stringify(params));
      return true;
    } catch (e) {
      return null;
    }
  }

export async function getAuthStorage() {
    try {
      const auth = await AsyncStorage.getItem(AUTH);
      return JSON.parse(auth);
    } catch (e) {
      return null;
    }
  }

export async function removeAuthStorage() {
    try {
      await AsyncStorage.removeItem(AUTH);
      return true;
    } catch (e) {
      return null;
    }
  }  