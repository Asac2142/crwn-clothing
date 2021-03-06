import React from 'react';
import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';
import CustomButtom from '../custom-button/custom-button.component';

import './collection-item.styles.scss';

const CollectionItem = ({ item, addItemToCart}) => { 
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className='image' style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className='collection-footer'>
                <span className='name'>{ name }</span>
                <span className='price'>{ price }</span>
            </div>
            <CustomButtom 
                onClick={() => addItemToCart(item)} 
                inverted>Add to cart
            </CustomButtom>
        </div>
    )
};

const mapDispatchToProps = (dispatch) => {
    return {
        addItemToCart: item => dispatch(addItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem);
