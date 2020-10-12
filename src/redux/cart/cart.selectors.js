import { createSelector } from 'reselect';

const selectCart = (state) => state.cart; //selector

export const selectCartItems = createSelector(
    [selectCart],
    (cart) => cart.cartItems
);

export const selectCartCounts = createSelector(
    [selectCartItems],
    (cartItems) => 
        cartItems.reduce(
            (acummulatedQuantity, cartItem) => 
            acummulatedQuantity + cartItem.quantity, 0)
);
