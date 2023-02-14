import React from 'react';
import '../App.css'
import '../style/navbar.css'

const Menu = () => {
    return (
        <div>
            <ul className="sidenav">
                <li><a className='nav-li-a' href="#home">Home</a></li>
                <li><a className='nav-li-a' href="#news">News</a></li>
                <li><a className='nav-li-a' href="#contact">Contact</a></li>
                <li><a className='nav-li-a' href="#about">About</a></li>
            </ul>
        </div>

    )
};

export default Menu;