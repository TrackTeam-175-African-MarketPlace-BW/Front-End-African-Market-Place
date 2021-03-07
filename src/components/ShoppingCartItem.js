import React from 'react'
import { connect } from 'react-redux';
import {deleteFromCart} from '../actions/itemsActions'

const ShoppingCartItem = (props) => {
    return (
        <div>
            <p>hello from ShoppingCartItem.js</p>
        </div>
    )
}

export default connect(null, {deleteFromCart})(ShoppingCartItem);
