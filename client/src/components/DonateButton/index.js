import React from "react";

import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART } from '../../utils/actions';
import { Button } from "reactstrap";

import { idbPromise } from "../../utils/helpers";

function DonateButton({resource}){

    const [state, dispatch] = useStoreContext();
    const { cart } = state;

    const addToCart = () => {
        // find the cart item with the matching id
        const itemInCart = cart.find((cartItem) => cartItem._id === resource._id);
      
        if (!itemInCart) {
            dispatch({
                type: ADD_TO_CART,
                product: { _id: resource._id, name: resource.name, shortDescription: resource.shortDescription, donation: 5 }
            });
            idbPromise('cart', 'put', { ...resource, donation: 5 });
        }
        
    };

    return(
        <div>
            <Button className="donateBtn" onClick={addToCart}>donate ♡</Button>
        </div>
    );
  
}

export default DonateButton;