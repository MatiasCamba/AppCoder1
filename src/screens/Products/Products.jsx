import { Text, View, FlatList, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import styles from './Products.Style'
import { Header, SearchInput } from '../../components/Index'
import { useSelector } from 'react-redux'
import { useGetProductsByCategoryQuery } from '../../services/shopApi'

const Products = ({ navigation }) => {

    const [keyword, setKeyword] = useState('');
    const category = useSelector(state => state.shop.categorySelected);
    const { data, isLoading } = useGetProductsByCategoryQuery(category);

    useEffect(() => {
        console.log(data)
        if (data) {

            const productsFiltered = data.filter(product => product.title.includes(keyword))

        }

    }, [])


    return (
        <View style={styles.container}>
            <Header title={category} />
            <SearchInput onSearch={setKeyword} />
            <View style={styles.listContainer}>
                {!isLoading && (
                    <FlatList
                        data={Object.values(data)}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate('Details', { product: item })}>
                                <Text>
                                    {item.title}
                                </Text>
                            </TouchableOpacity>)}
                        keyExtractor={item => item.id}



                    />
                )}

            </View>
        </View>
    )
}

export default Products

