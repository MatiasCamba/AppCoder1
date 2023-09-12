import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Categories from '../components/Categories'
import Header from '../components/Header'

const Home = () => {
  return (
   <>
   <Header title={'Home'}/>
   <Categories/> 
   </>
  )
}

export default Home

const styles = StyleSheet.create({})