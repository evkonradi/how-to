import { useReducer } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_CART_DONATION, CLEAR_CART, TOGGLE_CART} from "./actions";

export const reducer = (state, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product]
            };   
        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
            return product._id !== action._id;
            });
        
            return {
            ...state,
            cartOpen: newState.length > 0,
            cart: newState
            };      
        case UPDATE_CART_DONATION:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map(product => {
                if (action._id === product._id) {
                    product.donation = action.donation;
                }
                return product;
                })
            };
        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: []
            };
        case TOGGLE_CART:
            return {
                ...state,
                cartOpen: !state.cartOpen
            };
        default:
            return state;
    }
};

export function useResourceReducer(initialState) {
    return useReducer(reducer, initialState)
}