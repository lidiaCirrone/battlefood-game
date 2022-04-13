import React from 'react'

import './userBar.css'

import UiButton from '../uiButton/UiButton';
import UiGameIcon from '../uiGameIcon/UiGameIcon';

const UserBar = (props) => {

    return (
        <div className="player_bar">
            <p>username</p>
            <div style={{ display: 'flex' }}>
                <p>Regol</p>
                <p>Class</p>
            </div>
            {/* <UiButton label={rules} callback={openRules} />
            <UiGameIcon icon={trophy} /> */}
        </div>
    )
}

export default UserBar