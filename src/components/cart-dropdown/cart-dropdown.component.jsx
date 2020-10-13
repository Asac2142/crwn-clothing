import React from 'react';
import { connect } from 'react-redux';

import CartItem from '../cart-item/cart-item.component';
import CustomButton from '../custom-button/custom-button.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';
import { withRouter } from 'react-router-dom';

const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className='cart-dropdown'>
            <div className='cart-items'>
            {
                cartItems.length ? 
                cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                : <span className='empty-message'>Your cart is empty!</span>
            }
            </div>
            <CustomButton onClick={() => {
                history.push('/checkout');
                dispatch(toggleCartHidden());
            }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        cartItems: selectCartItems(state)
    }
};

export default withRouter(connect(mapStateToProps)(CartDropdown));

//para el dispatch, no fue necesario escribir el metodo "mapDispatchToProps" xq
//dice que, en el connect(), cuando no especificamos como 2ndo parametro el mapDispatchToProps,
//implicitamente, al props se lo envia el dispatch.... por lo tanto hay como accederlo
//declarandolo en el functional component