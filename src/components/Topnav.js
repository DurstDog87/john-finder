import React from 'react';
import '../App.css';
import '../style/navbar.css'

const Topnav = () => {
    return (
        <div>
            <ul className='topnav'>
                <li className='topnav-list-item'><a className='nav-li-a' href="default.asp">Home</a></li>
                <li className='topnav-list-item'><a className='nav-li-a' href="news.asp">News</a></li>
                <li className='topnav-list-item'><a className='nav-li-a' href="contact.asp">Contact</a></li>
                <li className='topnav-list-item'><a className='nav-li-a' href="about.asp">About</a></li>

            </ul>
        </div >
    )
};

export default Topnav;