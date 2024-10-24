import "./StyleSheets/StyleHeader.css"
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux"

export function Header(){
    const Redux_Cart_Items = useSelector(store=>store.Cart.cart_items);
    const numberOfCartItems = useSelector(store=>store.Cart.numberOfItems);

   

    const navigateTo = useNavigate();

    function handleGoToCart(){
        navigateTo('/cart')
    }
    
    

    return(
        <div className="HeaderComponent">
            <div className="content">
                <h1 className="title">ShoppyGlobe 
                    <div className="aurora">
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                    <div className="aurora__item"></div>
                    </div>
                </h1>
                <p className="subtitle">Your most loved shopping🛒 application</p>
            </div>

            <div className="Cart_Items_Button">
                
                
                    <button className="cartValueOverlap" onClick={handleGoToCart}>
                        
                        {Redux_Cart_Items.length == 0 && <img src="/empty-cart.png" alt="empty_cart" width="100px" height="90px" />  }
                        {Redux_Cart_Items.length != 0 && 
                            <>
                                <input type="text" value={numberOfCartItems} className="CartItemInput" readOnly/>
                                <img src="/shopping-cart.png" alt="shpping_cart" width="100px" height="90px" />

                            </>   
                        }

                        
                    </button>
                
                
                <small>↪Cart</small>
                
                
            </div>
        </div>
    )
}