import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState , useEffect} from 'react'
import allProducts from '../../data/products'
import styles from './Products.Style'
import { Header, SearchInput } from '../../components/Index'

const Products = ({ navigation, route }) => {

    const [arrProducts, setArrProducts] = useState([]);
    const [keyword, setKeyword] = useState('');
    const {category} = route.params 

    useEffect(() => {
        if (category) {
            const products = allProducts.filter(product => product.category === category);
            const productsFiltered = products.filter(product => product.title.includes(keyword))
            setArrProducts(productsFiltered);
        } else {
            const productsFiltered = allProducts.filter(product => product.title.includes(keyword))
            setArrProducts(productsFiltered);
        }

    }, [category, keyword])


    return (
        <View style={styles.container}>
            <Header title={category} />
            <SearchInput onSearch={setKeyword} />
            <View style={styles.listContainer}>
                <FlatList
                    data={arrProducts}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('Details',{product: item})}>
                            <Text>
                                {item.title}
                            </Text>
                        </TouchableOpacity>)}
                    keyExtractor={item => item.id}



                />
            </View>
        </View>
    )
}

export default Products

