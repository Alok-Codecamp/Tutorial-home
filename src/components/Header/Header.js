import React from 'react';
import logo from '../../logo.png'
import './Header.css'
const Header = () => {
    return (
       <div className="header">
            
        <div className="menu-bar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="nav-bar">
                <nav>
                    <a href="#">Subject List</a>
                    <a href="#">For Student</a>
                    <a href="#">For Parents</a>
                    <a href="#">For Tutor</a>
                    <a href="#">Pricing</a>
                </nav>
            </div>
            </div>
            <h4 className="budget">Total budget: 30000K </h4>
       </div>
    );
};

export default Header;