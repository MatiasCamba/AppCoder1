import { StyleSheet } from "react-native"
import {colors} from '../../constants/colors'


export default styles = StyleSheet.create({

    container : {
        flex:1 ,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    },
    loginContainer : {
        backgroundColor : colors.secondary,
        width:' 100%',
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems : 'center',


    },
    inputEmail : {
        width: '95%',
        backgroundColor: colors.quaternary,
        height:35 ,
        marginVertical:20,
        justifyContent: 'center',
        alignItems: 'center',


    },
    loginButton : {
        backgroundColor: colors.primary,
        width: '50%',
        height: 30,
        borderRadius:20,
        marginBottom:15,
        justifyContent: 'center',
        alignItems: 'center',
    }
    

})