import { createSlice } from '@reduxjs/toolkit'

const initialState = {
        itemsList:[],
        totalQuantity:0

}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addtocart(state,action){
            const newItem = action.payload;
            const existingItem = state.itemsList.find((item)=>item.id === newItem.id)

            if(existingItem){
                existingItem.quantity++
                existingItem.price += newItem.price
            }
            else{
                state.itemsList.push({
                  id:newItem.id,
                    price:newItem.price,
                    quantity:1,
                    totalPrice:newItem.price,
                    img:newItem.image
                })
               
                state.totalQuantity++;
            }
            console.log(state.itemsList)
    },
    emptycart(state){
      state.itemsList = [];
      state.totalQuantity = 0
    },
    removefromcart(state,action){
      const id = action.payload

      const existingItem = state.itemsList.find((item)=>item.id === id)

      if(existingItem.quantity === 1){
        state.itemsList = state.itemsList.filter((item)=>item.id !== id)
      }
      else{
        existingItem.quantity--;
        existingItem.price -= existingItem.price

      }
    },
    increasefromcart(state,action){
      const id = action.payload

      const existingItem = state.itemsList.find((item)=>item.id === id)

      if(existingItem){
        existingItem.quantity++
                existingItem.price += existingItem.price
      }
      
    }
  }
});

export const cartActions = cartSlice.actions

export default cartSlice