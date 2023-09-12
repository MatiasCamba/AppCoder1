import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../constants/colors'
import React from 'react'

const Header = ({title}) => {
  return (
    <View style = {styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container : {
        backgroundColor : colors.primary,
        height : 80 ,
        width: '100%',
        justifyContent : 'center',
        alignItems : 'center',

    },
    text: 
    {
        fontSize: 30,
    }

})