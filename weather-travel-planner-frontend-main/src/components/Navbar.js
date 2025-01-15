import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className='navbar-main-container'>
            <div className='navbar-container'>
                <div className='logo'>
                    Weather Trip Planner
                </div>
                <div className='nav-links'>
                    <a href="/" className='nav-link'>HOME</a>
                    <a href="/" className='nav-link'>ACTIVITIES</a>
                    <a href="/" className='nav-link'>EXPLORE</a>
                    <a href="/about" className='nav-link'>ABOUT</a>
                    <a href="/contact" className='nav-link'>CONTACT</a>
                </div>
                <div className='auth-links'>
                    <a href="/login" className='auth-link'>LOGIN</a>
                    <a href="/signup" className='auth-link'>SIGN UP</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
