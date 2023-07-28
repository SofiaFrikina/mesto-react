import headerLogo from '../images/header__image.svg';
import React from 'react';

function Header() {
    return (
        <header className="header">
            <img src={headerLogo} className="header__logo" alt="Логотип" />
        </header>
    )
}

export default Header;