// CONFIGURING REDUX STORE--> The MAIN Storage for all the data to be shared
import {configureStore} from "@reduxjs/toolkit"

import cartSliceReducer from './Cart_Slice.js'//importing reducer functions of our newly created slice

export const Products_ReduxStore= configureStore(
    {
        // Takes an object with slices and reducer functions
        // It contains slices =>piece of related information shared together

        // Created slice for Products List in a separate js file and now adding it
        reducer:{
            //MAIN REDUCER OF STORE that contains small reducers of all the Slices
            Cart: cartSliceReducer,
            //Inserting Our slice name as key and its reducer functions imported from slice

        },
    
    
    
    }

);

