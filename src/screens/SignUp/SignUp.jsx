import { View, Text, TextInput, Pressable } from 'react-native'
import React from 'react'
import styles from './SignUp.styles'

const SignUp = () => {
  return (
    <View style= {styles.container}>
      <View style ={styles.loginContainer}>
        <Text>
            SignUp to start
        </Text>
        <TextInput style = {inputEmail}/>
        <TextInput style = {inputEmail}/>
        <TextInput style = {inputEmail}/>
        <TextInput style = {inputEmail}/>
        <Pressable style= {loginButton}>
            <Text>Sign Up</Text>
        </Pressable>
            <Text>Already have an account?</Text>
        <Pressable style= {loginButton}>
            <Text>Login</Text>
        </Pressable>
      </View>
    </View>
  )
}

export default SignUp