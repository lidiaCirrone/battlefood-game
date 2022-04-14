import React from 'react'

import './UiInput.css';

const UiInput = (props) => {

    const inputHandler = (e) => {
        props.callback(e.target.value);
    }

    return (
        <>
            <input
                type={props.type}
                className={props.class}
                placeholder={props.placeholder}
                onChange={inputHandler} />
        </>
    )
}

UiInput.defaultProps = {
    type: 'text'
}

export default UiInput