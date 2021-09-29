import React from "react";
import './styles.css'

const Header = ({ isVisibleHeader }) => {
    
    return (
        <header className={ isVisibleHeader ? 'black' : '' } >
            <div className='header--logo'>
                <a href='/'>
                    <img src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' alt='Netflix' />
                </a>
            </div>
            <div className='header--usuario'>
                <a href='/'>
                    <img src='https://mellodyfarm.com/wp-content/uploads/sites/17/2018/06/Avatar-Unisex-Default.jpg' alt='Usuario' />
                </a>
            </div>
        </header>
    );
}

export default Header;