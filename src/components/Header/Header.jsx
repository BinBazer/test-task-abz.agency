import React from 'react';
import style from './Header.module.scss';
import NavBar from '../NavBar/NavBar';
import logo from '../../img/Logo.svg'

const Header = () => {
    return (
        <header>
            <div className={style.blackLine}></div>
            <div className={style.whiteLine}>
                <div className={style.wrapperHeader}>

                    <div className={style.wrapperLogo}>
                        <img
                            src={logo}
                            alt="fox it is logo for this company"
                        />
                    </div>
                    <NavBar />                    
                </div>
            </div> 
        </header>
    )
}

export default Header;