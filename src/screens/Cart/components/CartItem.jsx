import { View, Text, Pressable } from 'react-native'

import styles from './CartItem.styles'
import Feather from '@expo/vector-icons/Feather'

const CartItem = ({item}) => {
    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Image 
                        source = {{
                            uri: item.image
                        }}

                    />
                </View>
                <Text style={styles.name}> {item.title}</Text>
                <View />
                <View style={styles.details}>
                    <View>
                        <Text>{item.quantity}</Text>
                        <Text>{item.price}</Text>
                    </View>
                    <Pressable>
                        <Feather name="trash" size={24} color={"red"} />
                    </Pressable>
                </View>
            </View>
        </View>
    )
}

export default CartItem