import React, { useEffect } from "react";
import { useMutation } from "@apollo/react-hooks";
import {UPDATE_WALLET} from "../utils/mutations";
import { idbPromise } from "../utils/helpers";
import { useStoreContext } from '../utils/GlobalState';
import { CLEAR_CART } from '../utils/actions';

function Success() {

  const [state, dispatch] = useStoreContext();
  const [updateWallet] = useMutation(UPDATE_WALLET);

  useEffect(()=>{

    async function walletTransaction(item){

      console.log("Item:");
      console.log(item);
      await updateWallet({ variables: { username: item.author, amount: item.donation, resource_id: item._id, resource_name: item.name } });
    };

    async function clearShoppingCart(){
      const cart = await idbPromise('cart', 'get');

      cart.forEach((item) => {
        idbPromise('cart', 'delete', item);
      });

      if (state.cart.length){

        state.cart.forEach((item)=>{
          try{
            walletTransaction(item);
          }
          catch(e){
            console.error(e);
          };
        });

        dispatch({ type: CLEAR_CART });
      }
  
    }

    clearShoppingCart();

  },[dispatch, state.cart, updateWallet])


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