
import { useDispatch,useSelector} from "react-redux"
import {removeCartItem, increaseQuantity, decreaseQuantity} from "../utils/Cart_Slice";
import { Link } from "react-router-dom";

import "./StyleSheets/StyleCartItem.css"



export function Cart_Item(props){
    
    const numberOfCartItems = useSelector(store=>store.Cart.numberOfItems);
    console.log("Number of Items in Cart:",numberOfCartItems);
    const dispatch = useDispatch();
    

    function handleRemoveCartItem(){
        dispatch(removeCartItem(props.item.id));
    }

    function handleDecreaseQuantity(){
        dispatch(decreaseQuantity(props.item));
    }

    function handleIncreaseQuantity(){
        dispatch(increaseQuantity(props.item));
    }
    
    return(
        <div className="Cart_Item_Card">
            
            <div className="Item_Information">
                <div className="Item_Image">
                    <Link to={`/product/${props.item.id}`} title={"View More Details"}>
                        <img src={props.item.thumbnail} height="250px"/>
                    </Link>
                    
                </div>
                <div className="Item_Info">
                    <h5>{props.item.brand}</h5>
                    <h4>{props.item.title}</h4>
                    <h5>{props.item.description}</h5>
                    <h5 className="stockStatus">{props.item.availabilityStatus}</h5>
                    <h4>${props.item.price}</h4>
                    
                    <div className="Item_Quantity_Section">

                        <button className="QtyBtn" onClick={handleDecreaseQuantity}><span>-</span></button>
                        <button className="QtyBtn" disabled={true}>{`Qty: ${props.item.Quantity}`}</button>
                        <button className="QtyBtn" onClick={handleIncreaseQuantity}><span>+</span></button>
                        
                    </div>

                    <button onClick={handleRemoveCartItem} className="QtyBtn RemoveBtn">Remove Item</button>

                    

                </div>
            </div>
            <div className="Total_Price">
                <h3>${(props.item.price * props.item.Quantity).toFixed(2)}</h3>
            </div>
            
        </div>
    )
}