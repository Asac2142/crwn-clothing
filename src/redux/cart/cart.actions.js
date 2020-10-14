import { CartActionTypes } from "./cart.types";

export const toggleCartHidden = () => {
    return {
        type: CartActionTypes.TOGGLE_CART_HIDDEN
    };
};

export const addItem = (item) => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: item
    };
};

export const removeItemFromCart = (item) => {
    return {
        type: CartActionTypes.CLEAR_ITEM_FROM_CART,
        payload: item
    }
};

export const decreaseItemQuantity = (item) => {
    return {
        type: CartActionTypes.DECREASE_QUANTITY,
        payload: item
    }
};
