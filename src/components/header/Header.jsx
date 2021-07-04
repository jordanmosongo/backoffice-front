import React from 'react';
import './header.scss';

const Header = () => {
    return (
        <div className = "header">
            <div className = "header__container">
                <a className = "header__container__logo" href="/">
                    J<span>M</span>
                </a>
                <ul className = "header__container__menu">
                    <li><a href="/project">Projects</a></li>
                    <li><a href="/tool">Tools</a></li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
