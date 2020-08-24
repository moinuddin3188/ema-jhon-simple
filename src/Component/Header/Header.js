import React from 'react';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <img src={logo} alt=""/>
            </div>
            <div className='nav-bar'>
                <nav>
                    <a href="shop">Shop</a>
                    <a href="review">Order Review</a>
                    <a href="manage">Manage Inventory</a>
                </nav>
            </div>
            <div className='search'>
                <input type="text" placeholder='Type hear to search'/>
            </div>
        </div>
    );
};

export default Header;