import {  Text, View , Image, Pressable} from 'react-native'
import React from 'react'
import {Header} from '../../components/Index'
import styles from './Details.style'
import { useDispatch } from 'react-redux'
import { addItem } from '../../features/cart/cartSlice'


const Details = ({route }) => {
  
 
  const {product} = route.params


  const dispatch = useDispatch()


  const handleAddToCart = () => {
    dispatch(addItem({...product, quantity : 1}))
  }


  return (
    <View style={styles.container}>
      <Header title={'Detalles'}/>
      <Image style={styles.image} source={{uri: product.image}}/>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text> 
      <Pressable onPress={handleAddToCart}>

          <Text>Añadir al carrito</Text>
     
      </Pressable>
      
      
    </View>
   
  
)}

export default Details

