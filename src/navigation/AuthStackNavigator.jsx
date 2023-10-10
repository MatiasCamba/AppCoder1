import { createNativeStackNavigator } from "@react-navigation/native-AuthStack";
import {SignUp , Login} from '../screens'



const AuthStack = createNativeStackNavigator();

function AuthStackNavigator() {
    return (

       

            <AuthStack.Navigator
                initialRouteName='SignUp'
                >

                <AuthStack.Screen name='SignUp' component= {SignUp} />
                <AuthStack.Screen name='Login' component= {Login} />
             

            </AuthStack.Navigator>

        
    )
}

export default AuthStackNavigator