import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';

const Product = (props) => {
    const {name, img, seller, price, stock, features} = props.product;
    console.log(props.product)
    return (
        <div className='product'>
            <div>
                <img src={img} alt=""/>
            </div>
            <div>
            <h4 className='product-name'>{name}</h4>
                <div className='product-description'>
                    <div>
                        <p><small>By: {seller}</small></p>
                        <p>Price: ${price} </p>
                        <p><small>Only {stock} left in stock - order soon</small></p>
                        <button className='main-button' onClick={() => props.handleAddProduct(props.product)}>
                            <FontAwesomeIcon icon={faShoppingCart} /> Add to cart
                        </button>
                    </div>
                    <div className='description'>
                        <div>
                            <h4>Product Description</h4>
                            <ul>
                                {
                                    features.map(itm => <li>{itm.description}: {itm.value} </li>)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;