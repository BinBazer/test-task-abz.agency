import React from 'react';
import mod from './Button.module.scss';

const Button = ({ text, visible }) => {
    const style = visible ? mod.notActiveButton : mod.activeButton;

    return (
        <button
            className={style}
            disabled={visible}
        >
            {text}
        </button>
    )
}

export default Button;