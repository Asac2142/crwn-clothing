import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden_component }) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden_component}>
            <ShoppingIcon className='shopping-icon' />
            <span className='item-count'>0</span>
        </div>
    )
};

//esta funcion, le llena al "toggleCartHidden_component" del CartIcon component con toggleCartHidden 
//tomado desde Redux (cart.actions)
//en otras palabas, cuando veas "mapDispatchToProps", esa funcion, despacha acciones
//en este caso, acciones del cart, nada mas
const mapDispatchToProps = (dispatch) => {
    return {
        toggleCartHidden_component: () => dispatch(toggleCartHidden())
    }
};

export default connect(null, mapDispatchToProps)(CartIcon);
