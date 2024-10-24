import "./StyleSheets/StyleProductItem.css"
import { StarRating } from "./StarRating";
import {Link} from 'react-router-dom'

import { useDispatch,useSelector } from "react-redux"
import { addCartItem } from "../utils/Cart_Slice";
import { useState } from "react";

export function ProductItem(props){
    

    const cart_data = useSelector(store=>store.Cart.cart_items);
    const dispatch = useDispatch();
    const product = props.productData;

    function handleAddToCart(){
        dispatch(addCartItem(product));
        
    }


    return(
        <div className="ProductItemCard">
                
            
                {/* cover image */}
                <img src={product.thumbnail} className="product_thumbnail" height="300px" width="300px" />

                {/* div to store title of the book and its description */}
                <div className="ProductCardText">
        
                    <h1 className="product_title">{product.title}</h1>
                    
                    <div className="product_tags">
                        <h3>Tags:</h3>
                        {product.tags.map((tag,index)=>{
                            return (
                            <h3 className="tags" key={index}>{tag}</h3>
                            
                            )
                        })}
                    </div>
                    
                    <div className="product_price">
                        <h2>{`$ ${product.price}`}</h2>  
                        <span>{`(${product.discountPercentage}% off)`}</span>
                    </div>
                   
                    
                    <StarRating ProductRating={product.rating} starHeight={"25px"}/>
                </div>
            
                
                <div className="Product_Item_Btns">
                    <button type="submit" className="customBtn" id="AddToCartBtn" onClick={handleAddToCart}>Add Product to cart🛒 </button>
                    

                   
                    
                    <button type="submit" className="customBtn" id="ViewDetailsBtn">
                        <Link to={`/product/${product.id}`} key={product.id} >View More Details🔎</Link> 
                    </button>
                     
                </div>
                

            
                
                
            
            
            
        </div>
    )
}