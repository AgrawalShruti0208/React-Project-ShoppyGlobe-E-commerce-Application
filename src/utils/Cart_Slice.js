// Slice for storing Products List to be shared with all the components
import {createSlice} from '@reduxjs/toolkit'
import { act } from 'react';
// createSlice provided by redux to create Slice for the project



const Cart_Slice = createSlice(
    {
        //createSlice takes an object inside it
        name: "Cart",//name for the slice
        initialState:{
            //initial state for the list of cart items : empty
            cart_items: [], 
            numberOfItems: 0,
            totalAmount :0
        },
        reducers:{
            //In Reducers we can specify what actions we want to perform on the data
                //Action 1: addBook
                //Inside it a reducer function to perform this action
                addCartItem:(state,action) =>{
                    //action to add the item in the list given to the action when dispatched
                    const selectedProduct= action.payload;
                    let productInCart = false;
                    let list = state.cart_items;
                    list.map((item)=>{
                        if(item.id === selectedProduct.id){
                            productInCart =true;

                        }
                    })
                    console.log("Number of items in cart before element add",state.numberOfItems);
                    if(productInCart===false){
                        state.cart_items.push(action.payload);
                        state.numberOfItems += 1;
                        const cartItem = state.cart_items.find((item)=>item.id === action.payload.id);
                        cartItem.Quantity = 1;

                    }else{
                        alert("Product Already Added in the Shopping Cart✅");
                        
                    }
                    
                    
                },

                removeCartItem:(state,action)=>{
                    const selectedProductID = action.payload;
                    const selectedProduct = state.cart_items.find((item)=>item.id=== selectedProductID);
                    state.numberOfItems -= selectedProduct.Quantity;
                    state.cart_items = state.cart_items.filter((item)=>item.id != selectedProductID);
                    

                },
                increaseQuantity:(state,action)=>{
                    const selectedProduct = state.cart_items.find((item)=>item.id=== action.payload.id);
                    if(selectedProduct.Quantity<8){
                        selectedProduct.Quantity +=1;
                        state.numberOfItems +=1;
                    }else{
                        alert("Maximum Quantity Value Reached❎");
                    }
                    
                },
                decreaseQuantity:(state,action)=>{
                    const selectedProduct = state.cart_items.find((item)=>item.id=== action.payload.id);
                    if(selectedProduct.Quantity >1){
                        selectedProduct.Quantity -= 1;
                        state.numberOfItems -=1;
                    }else{
                        alert("Minimum Quantity Value Reached❎");
                    }
                    
                },
                calculateTotal:(state)=>{
                    let total = 0;
                    state.cart_items.forEach((item)=>{
                        total += item.price * item.Quantity;
                    })

                    state.totalAmount = total.toFixed(2);
                }
                
                
                
        }
    }
);

// Exporting all the actions and Reducer props
export const {addCartItem,removeCartItem,increaseQuantity,decreaseQuantity, calculateTotal} = Cart_Slice.actions;
export default Cart_Slice.reducer;
//Now adding this slice to store