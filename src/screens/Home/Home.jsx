import { View, FlatList } from 'react-native'
import React from 'react'
import { Header } from '../../components/Index'
import { CategoryItem } from './Components/Index'
import styles from './Home.style'
import { useGetCategoriesQuery } from '../../services/shopApi'






const Home = ({ navigation }) => {
  const { data, isLoading } = useGetCategoriesQuery()
  return (
    <View style={styles.container}>


      <Header title={'Categorias'} />
      {!isLoading && (
        <FlatList data={data}
          keyExtractor={categories => categories.title}
          renderItem={({ item }) => (
            <CategoryItem
              category={item.title}
              navigation={navigation} />
          )}
        />
      
      )
        

      }
      

    </View>



  )
}

export default Home

