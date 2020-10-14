import { CartActionTypes } from "./cart.types";
import { addItemToMyCart, removeItemFromMyCart, decreaseItemQuantityFromCart } from "./cart.utils";

const INITIAL_STATE = {
    hidden: true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            };
        case CartActionTypes.ADD_ITEM: 
            return {
                ...state,
                cartItems: addItemToMyCart(state.cartItems, action.payload)
            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItemFromMyCart(state.cartItems, action.payload)
            };
        case CartActionTypes.DECREASE_QUANTITY:
            return {
                ...state,
                cartItems: decreaseItemQuantityFromCart(state.cartItems, action.payload)
            };         
        default:
            return state;
    }
};

export default cartReducer;
