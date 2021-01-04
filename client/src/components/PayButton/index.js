import React from "react";

import { useStoreContext } from '../../utils/GlobalState';
import { ADD_TO_CART } from '../../utils/actions';
import { Button, Box } from "@chakra-ui/core";

import { idbPromise } from "../../utils/helpers";

function PayButton({resource}){

    const [state, dispatch] = useStoreContext();
    const { cart } = state;

    const addToCart = () => {
        // find the cart item with the matching id
        const itemInCart = cart.find((cartItem) => cartItem._id === resource._id);
      
        if (!itemInCart) {
            dispatch({
                type: ADD_TO_CART,
                product: { _id: resource._id, name: resource.name, shortDescription: resource.shortDescription, cost: resource.cost, author: resource.displayName }
            });
            idbPromise('cart', 'put', { _id: resource._id, name: resource.name, shortDescription: resource.shortDescription, cost: resource.cost, author: resource.displayName });
        }
        
    };

    return(
        <div>
            <Box>
            <Button 
              className="center"
              size="lg"
              height="60px"
              width="200px"
              border="2px"
              bg="wheat"
              color="#253237"
              _hover={{ color: "#D99748" }}
               onClick={addToCart}
               >Please pay to view
               </Button>
               </Box>
        </div>
    );
  
}

export default PayButton;