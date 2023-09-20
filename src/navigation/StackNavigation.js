import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, Products, Details } from '../screens/Index';

import { Button, View } from "react-native";


const Stack = createNativeStackNavigator();

function StackNavigator() {
    return (

        <NavigationContainer>

            <Stack.Navigator
                initialRouteName='Home'
                screenOptions={({ route, navigation }) => ({

                    header: () => (
                        <View style={{
                            flexDirection: 'row',
                            margin: 5,


                        }}>
                            <Button
                                title="Atras"
                                onPress={() => navigation.goBack()} />
                            {/*  <Header title={'Tienda'} /> */}
                        </View>
                    )
                })}>

                <Stack.Screen name='Home' component={Home} />
                <Stack.Screen name='Products' component={Products} />
                <Stack.Screen name='Details' component={Details} />

            </Stack.Navigator>

        </NavigationContainer>
    )
}

export default StackNavigator