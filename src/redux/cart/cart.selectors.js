import { createSelector } from 'reselect';

const selectCart = (state) => state.cart; //selector

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectCartCounts = createSelector(
    [selectCartItems],
    (cartItems) => 
        cartItems.reduce(
            (acummulatedQuantity, cartItem) => 
            acummulatedQuantity + cartItem.quantity, 0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce( 
        (acummulatedQuantity, cartItem) => 
            acummulatedQuantity + cartItem.quantity * cartItem.price, 0)
);
