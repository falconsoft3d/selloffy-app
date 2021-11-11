import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { StyleSheet, Text, View } from 'react-native';
import ProductStack from "./ProductStack";
import Favorites from "../screens/Favorites";
import Cart from "../screens/Cart";
import SaleOrder from "../screens/SaleOrder";
import AccountStack from './AccountStack';
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import colors from "../styles/colors";

const Tab = createMaterialBottomTabNavigator();

const AppNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
                barStyle={styles.navigation}
                screenOptions={( { route } )=>({
                    tabBarIcon: (routerStatus ) => {
                        return setIcon( route, routerStatus );
                    }
                })}>
                <Tab.Screen 
                    name="home"
                    component={ProductStack}
                    options={{
                        title: "Home",
                    }}
                />
                <Tab.Screen 
                    name="favorites"
                    component={Favorites}
                    options={{
                        title: "Favorites",
                    }}
                />
                <Tab.Screen 
                    name="cart"
                    component={Cart}
                    options={{
                        title: "Cart",
                    }}
                />
                <Tab.Screen 
                    name="so"
                    component={SaleOrder}
                    options={{
                        title: "SO",
                    }}
                />
                <Tab.Screen 
                    name="account"
                    component={AccountStack}
                    options={{
                        title: "Config",
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigation

const styles = StyleSheet.create({
    navigation: {
        backgroundColor: colors.bgPink,
    },

    icon : {
        fontSize: 20,
        color: colors.fontLight
    }
})

function setIcon(route, routeStatus) {
    let iconName = "";
    switch (route.name) {
        case "home":
            iconName = "home";
            break;

        case "favorites":
            iconName = "heart";
            break;

        case "cart":
            iconName = "shopping-cart";
            break;
        
        case "so":
            iconName = "book";
            break;

        case "account":
            iconName = "bars";
            break;
    
        default:
            break;
    }
    return <AwesomeIcon  name={iconName} style={styles.icon}/>
}
