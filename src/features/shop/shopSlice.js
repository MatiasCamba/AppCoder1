import { createSlice } from "@reduxjs/toolkit";
import categories from "../../data/categories";
import dataProducts from '../../data/products'


const initialState = {

    categories : categories,
    products : dataProducts,
    productsFilteredByCategory : [],
    categorySelected : null ,
    productIdSelected : null ,
}


export const shopSlice = createSlice({
    name: 'shop',
    initialState,
    reducers : {
        setCategorySelected : (state, action) => {
            state.categorySelected = action.payload
        }, 
        setProductIdSelected : (state,action) => {
            state.productIdSelected = action.payload
        }
    }
})

export const {setCategorySelected,setProductIdSelected} = shopSlice.actions
export default shopSlice.reducer