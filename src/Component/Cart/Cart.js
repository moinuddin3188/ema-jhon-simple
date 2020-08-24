import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((total, product) => total + product.price, 0);
    let shipping = 0;
    if (totalPrice > 50) {
        shipping = 0;
    }
    else if (totalPrice > 35) {
        shipping = 8.67;
    }
    else if (totalPrice > 0) {
        shipping = 12.56;
    }
    const tex = Math.round(totalPrice / 10);

    return (
        <div className='cart'>
            <h3>Order Summary</h3>
            <h5>Ordered Items: {cart.length} </h5>
            <table>
                <tr>
                    <td>Items:</td>
                    <td>${totalPrice}</td>
                </tr>
                <tr>
                    <td>Shipping:</td>
                    <td>${shipping} </td>
                </tr>
                <tr>
                    <td>Text:</td>
                    <td>${tex} </td>
                </tr>
                <h4>Order Total: ${(totalPrice + shipping + tex).toFixed(2)} </h4>
            </table>
            <button className='review-order'>Review Order</button>
        </div>
    );
};

export default Cart;