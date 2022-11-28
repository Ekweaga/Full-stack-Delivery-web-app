import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartslice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {persistStore} from 'redux-persist';
import { combineReducers } from "redux";
import thunk from "redux-thunk"


const persistConfig = {
    key : 'food-shop',
    storage,

}
const appReducer = combineReducers({
  cart:cartSlice.reducer
}   
)

const persistedReducer = persistReducer(persistConfig,appReducer)

const store = configureStore({  
    reducer :persistedReducer,
devTools:process.env.NODE_ENV !== 'production',
middleware:[thunk]
})

export const persistor = persistStore(store);

export default store