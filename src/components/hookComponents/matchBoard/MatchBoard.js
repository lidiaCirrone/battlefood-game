import React from 'react'

import './MatchBoard.css'

import UiGameIcon from '../uiGameIcon/UiGameIcon';
import Score from '../score/Score';

import {playerIcon, computerIcon}  from '../../../utils/utils';


const MatchBoard = (props) => {


   return (
      <div className='play_board'>

         <div style={{
            display: 'flex',
            height: '48%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            {
               !props.computerIcon ? <UiGameIcon icon={computerIcon} size={100} circleSize={180} />
                  : <UiGameIcon icon={require(`../../../assets/icons/${props.computerIcon}.png`)} size={100} circleSize={180} />
            }
            <Score score={props.computerScore} name={'Computer'} />
         </div>

         <hr style={{
            marginLeft: 0,
            marginRight: 0
         }} />

         <div style={{
            display: 'flex',
            height: '48%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <Score score={props.playerScore} name={'Player'} class={props.playerResult} />
            {
               !props.playerIcon ? <UiGameIcon icon={playerIcon} size={100} circleSize={180} />
                  : <UiGameIcon icon={require(`../../../assets/icons/${props.playerIcon}.png`)} size={100} circleSize={180} />
            }
         </div>

      </div>
   )
}

export default MatchBoard