import React from 'react';
import style from './Header.module.scss';
import NavBar from '../NavBar/NavBar';
import logo from '../../img/Logo.svg'

const Header = () => {
    return (
        <header>
            <div class={style.blackLine}></div>
            <div class={style.whiteLine}>
                <div class={style.wrapperHeader}>

                    <div class={style.wrapperLogo}>
                        <img src={logo} alt="fox it is logo for this company" />
                    </div>
                    <NavBar />                    
                </div>
            </div> 
        </header>
    )
}

export default Header;