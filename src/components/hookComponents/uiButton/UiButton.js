import React from 'react'


const UiButton = (props) => {

    const click = () => {
        props.callback()
    }

    return (
        <>
            <button type={props.type} onClick={click}>{props.label}</button>
        </>
    )
}

export default UiButton