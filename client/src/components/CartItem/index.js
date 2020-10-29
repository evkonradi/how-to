import React from 'react';

import { useResourceContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART, UPDATE_CART_DONATION } from '../../utils/actions';

//import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) => {

  const [, dispatch] = useResourceContext();

  const removeFromCart = item => {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: item._id
    });
    //idbPromise('cart', 'delete', { ...item });
  };

  const onChange = (e) => {
    const value = e.target.value;
  
    if (value === '0') {
      dispatch({
        type: REMOVE_FROM_CART,
        _id: item._id
      });
      //idbPromise('cart', 'delete', { ...item });
    } else {
      dispatch({
        type: UPDATE_CART_DONATION,
        _id: item._id,
        donation: parseInt(value)
      });
      //idbPromise('cart', 'put', { ...item, purchaseQuantity: parseInt(value) });
    }
  };

  return (
    <div className="flex-row">
      {/* <div>
        <img
          src={`/images/${item.image}`}
          alt=""
        />
      </div> */}
      <div>
        <div>{item.name}</div>
        <div>{item.shortDescription}</div>
        <div>
          <span>Donation, $:</span>
          <input
            type="number"
            placeholder="1"
            value={item.donation}
            onChange={onChange}
          />
          <span
            role="img"
            aria-label="trash"
            onClick={() => removeFromCart(item)}
          >
            🗑️
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartItem;