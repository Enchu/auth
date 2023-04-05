import React from 'react';
import cs from './MyButton.module.css'

const MyButton = ({props, children}) => {
    return (
        <button {...props} className={cs.myBtn}>
            {children}
        </button>
    );
};

export default MyButton;