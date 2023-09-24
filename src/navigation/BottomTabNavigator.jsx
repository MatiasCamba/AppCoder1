import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import CartNavigator from './CartNavigator'
import OrdersNavigator from './OrdersNavigator'
import StackNavigator from './StackNavigation'
import { StyleSheet } from "react-native"
import { colors } from "../constants/colors";
import Feather from '@expo/vector-icons/Feather'


const BottomTab = createBottomTabNavigator();

function BottomTabNavigator() {
    return (
        <BottomTab.Navigator initialRouteName="Tienda" screenOptions={{
            headerShow: false,
            tabBarShowLabel: false,
            tabBarStyle: styles.tabBar
        }}>
            <BottomTab.Screen
                name='Tienda'
                component={StackNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="shopping-bag" size={24} color={focused ? colors.quaternary : 'white'} />
                    )

                }} />
            <BottomTab.Screen
                name='Carrito'
                component={CartNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="shopping-cart" size={24} color={focused ? colors.quaternary : 'white'} />
                    )

                }}
            />
            <BottomTab.Screen
                name='Ordenes'
                component={OrdersNavigator}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Feather name="list" size={24} color={focused ? colors.quaternary : 'white'} />
                    )

                }}
            />



        </BottomTab.Navigator>
    )

}


export default BottomTabNavigator




const styles = StyleSheet.create({

    tabBar: {
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        backgroundColor: colors.primary,

    },


})