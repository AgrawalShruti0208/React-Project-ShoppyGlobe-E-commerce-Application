import { useSelector,useDispatch} from "react-redux"
import { useNavigate } from "react-router-dom";
import { Cart_Item } from "./Cart_Item";
import { useEffect } from "react";
import { calculateTotal } from "../utils/Cart_Slice";

import "./StyleSheets/StyleCartDisplay.css"


export function Cart_Display(){
    const Cart = useSelector(store => store.Cart.cart_items);
    const Cart_Amount = useSelector(store => store.Cart.totalAmount);
    const numberOfCartItems = useSelector(store=>store.Cart.numberOfItems);
    const Total_Amount = (parseFloat(Cart_Amount)+10).toFixed(2) //shipping charges

    const dispatch = useDispatch();
    
    // Calculate Total function to be invoked everytime cartItem value changes 
    useEffect(()=>{
        dispatch(calculateTotal());

    },[Cart]);

    const navigateTo = useNavigate();

    function handleGoBack(){
        navigateTo("/");
    }

    function handlePlaceOrder(){
        navigateTo('/Final');
        location.replace(location.href);
        
    }
    

    return(
        <div className="Cart_Display">
            <div className="BackArrow2">
                        
                        <button onClick={handleGoBack}>
                            <img src="/left-arrow.svg" className="BackArrowImg2" alt="Back Arrow" height="60px" />
                        </button>

                        <h3>Continue Shopping</h3>
            </div>

            {Cart.length==0 && (
                <div className="EmptyCartDiv">
                
                    <div className="emptyCartOverlay">
                        <div className="EmptyCartHeading">
                            <h1>Your cart is Empty.</h1>
                        </div>
                        
                        <img src="/empty cart page.png" alt="" />
                    </div>
                    
                        
                </div>
            )}

            {Cart.length!=0 && (
                <div className="CartItems_DisplayDiv">
                    <div className="ShoppingCart">
                        <div className="ShoppingCartHeading">
                            <h1>Shopping Cart</h1>
                        </div>
                        
                        
                        <div className="ShoppingCartSections">
                            <div className="ShoppingCartItems">
                                {
                                    Cart.map((data)=>{
                                       return <Cart_Item key={data.id} item = {data} />
                                    })
                                }
                                
                            </div>
                            <div className="ShoppingCartCheckout">
                                <h3>PRICE DETAILS ({numberOfCartItems} {numberOfCartItems===1?"Item":"Items"})</h3>
                                
                                <div className="cartCheckOutFlex">
                                    <p>Total MRP</p>
                                    <p><strong>${Cart_Amount}</strong></p>
                                </div>

                                <div className="cartCheckOutFlex">
                                    <p>Shipping Fee</p>
                                    <p><strong>$10</strong></p>
                                </div>

                                <hr />
                                <div className="cartCheckOutFlex">
                                    <h3>Total Amount</h3>
                                    <h3>${Total_Amount}</h3>
                                </div>
                                
                                
                                <button type="submit" className="PlaceOrderBtn" onClick={handlePlaceOrder}>PLACE ORDER</button>
                                
                            </div>
                        </div>
                        
                        
                    </div>
                </div>
            )}
            
                    
                
        </div>
        

    )
}

    
    
        
    