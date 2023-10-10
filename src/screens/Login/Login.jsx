import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './Login.styles'

const Login = () => {
  return (
    <View style= {styles.container}>
      <View style ={styles.loginContainer}>
        <Text>
            Login to start
        </Text>
        <TextInput style = {inputEmail}/>
        <TextInput style = {inputEmail}/>
        <Pressable style= {loginButton}>
            <Text>Login</Text>
        </Pressable>
            <Text>Dont have an account?</Text>
        <Pressable style= {loginButton}>
            <Text>Sign up</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default Login