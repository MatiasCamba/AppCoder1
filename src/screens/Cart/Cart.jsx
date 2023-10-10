import { View, Text, FlatList, Pressable } from 'react-native'
import styles from './Cart.styles'
import cart from '../../data/cart'
import CartItem from '../Cart/components/CartItem'
import { useSelector } from 'react-redux'

const Cart = () => {

  const cart = useSelector(state => state.cart.items)
  const total = useSelector(state => state.cart.total)

  const renderItem = ({item}) => {
    <CartItem item={item}/>
  }

  return (
    <View style={styles.container}>
      <View style= {styles.listContainer}>
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
              {`total : $ ${total}`}
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  )
}

export default Cart