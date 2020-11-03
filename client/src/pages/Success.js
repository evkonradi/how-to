import React, { useEffect } from "react";
//import { useMutation } from "@apollo/react-hooks";
//import {ADD_ORDER} from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { useStoreContext } from '../utils/GlobalState';
import { CLEAR_CART } from '../utils/actions';

function Success() {

  const [, dispatch] = useStoreContext();

  useEffect(()=>{

    async function clearShoppingCart(){
      const cart = await idbPromise('cart', 'get');

      cart.forEach((item) => {
        idbPromise('cart', 'delete', item);
      });

      dispatch({ type: CLEAR_CART });
  
    }

    clearShoppingCart();

  },[dispatch])


    return (
      <div>
        <div style={{ height: 560, clear: "both", paddingTop: 120, textAlign: "center" }} >
          <h2>
            Thank you for your donation!
          </h2>
        </div>
      </div>
    );
  };

export default Success;