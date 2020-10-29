import React from "react";

import { useResourceContext } from '../../utils/GlobalState';
import { ADD_TO_CART } from '../../utils/actions';
import { Button } from "reactstrap";

function DonateButton({resource}){

    const [state, dispatch] = useResourceContext();
    const { cart } = state;

    const addToCart = () => {
        // find the cart item with the matching id
        const itemInCart = cart.find((cartItem) => cartItem._id === resource._id);
      
        if (!itemInCart) {
            console.log("Resource:");
            console.log(resource);
            dispatch({
                type: ADD_TO_CART,
                product: { _id: resource._id, name: resource.name, shortDescription: resource.shortDescription, donation: 5 }
            });
            //idbPromise('cart', 'put', { ...item, purchaseQuantity: 1 });
        }
        
    };

    return(
        <div>
            <Button onClick={addToCart}>Please donate</Button>
        </div>
    );
  
}

export default DonateButton;