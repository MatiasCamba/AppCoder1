import { View, FlatList } from 'react-native'
import React from 'react'
import dataCategories from '../../data/dataCategories'
import { Header } from '../../components/Index'
import { CategoryItem } from './Components/Index'
import styles from './Home.style'




const Home = ({  navigation }) => {
  return (
    <View style={styles.container}>
      <Header title={'Categorias'} />
      <FlatList data={dataCategories}
        keyExtractor={category => category}
        renderItem={({ item }) => (
          <CategoryItem
            category={item}
            navigation={navigation} />
        )}
      />
    </View>



  )
}

export default Home

