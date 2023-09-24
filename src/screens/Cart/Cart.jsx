import { View, Text, FlatList, Pressable } from 'react-native'
import styles from './Cart.styles'
import cart from '../../data/cart'
import CartItem from '../Cart/components/CartItem'

const Cart = () => {

  const renderItem = () => {
    <CartItem />
  }

  return (
    <View style={styles.container}>
      <View>
        <FlatList 
          data = {cart} 
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View>
        <Pressable>
          <Text>
            Aceptar
          </Text>
          <View>
            <Text>
              {'Total $'}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart