import React from 'react'

import './MatchBoard.css'

import UiGameIcon from '../uiGameIcon/UiGameIcon';
import Score from '../score/Score';


const MatchBoard = (props) => {

   let computer = 'computer';
   let computerIcon = 'pancakes';
   let player = 'player';
   let playerIcon = 'paella';


   return (
      <div className='play_board'>

         <div style={{
            display: 'flex',
            height: '48%',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
         }}>
            <UiGameIcon icon={require(`../../../assets/icons/${computerIcon}.png`)} size={100} circleSize={180} />
            <Score user={computer} />
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
            <Score user={player} />
            <UiGameIcon icon={require(`../../../assets/icons/${playerIcon}.png`)} size={100} circleSize={180} />
         </div>

      </div>
   )
}

export default MatchBoard