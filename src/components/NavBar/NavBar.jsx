import React from 'react';
import style from './NavBar.module.scss'
import Button from '../UI/Button/Button';

const NavBar = () => {
    return (
        <nav className={style.myNav}>
            <Button text={'Users'} visible={true} id={style.a} />
            <Button text={'Sign up'} visible={false} />
        </nav>
    );
};

export default NavBar;

