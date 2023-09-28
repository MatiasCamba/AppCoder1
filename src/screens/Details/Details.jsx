import {  Text, View , Image} from 'react-native'
import React from 'react'
import {Header} from '../../components/Index'
import styles from './Details.style'


const Details = ({route }) => {
 
  const {product} = route.params
  return (
    <View style={styles.container}>
      <Header title={'Detalles'}/>
      <Image style={styles.image} source={{uri: product.image}}/>
      <Text style={styles.title}>{product.title}</Text>
      <Text>{product.description}</Text>
      <Text style={styles.price}>{`$ ${product.price}`}</Text> 
     
      
    </View>
    
  )
}

export default Details

