import React, { useState } from 'react'

import './userBar.css'

import InfoIcon from '../infoIcon/InfoIcon';
import UiModal from '../uiModal/UiModal';
import UiButton from '../uiButton/UiButton';
import UiRuleIcon from '../uiRuleIcon/UiRuleIcon';

import { pancakesIcon, hamburgerIcon, croissantIcon, paellaIcon, rulesIcon, trophyIcon } from '../../../utils/utils';


const UserBar = (props) => {

   const [state, setState] = useState({
      openRanking: false,
      openRules: false
   })

   const showRules = () => {
      setState({
         // ...state,
         openRules: true
      })
   }

   const closeRules = () => {
      setState({
         // ...state,
         openRules: false
      })
   }

   const showRanking = () => {
      setState({
         // ...state,
         openRanking: true
      })
   }

   const closeRanking = () => {
      setState({
         // ...state,
         openRanking: false
      })
   }

   const playerData = JSON.parse(localStorage.getItem('players'));

   const renderPlayerData = (data, key) => {
      return (
         <li key={key} className={'player-item'}>
            <span>{data.name}</span> <span>{data.score}</span>
         </li>
      )
   }

   return (
      <>

         <div className="player_bar">
            <p className={'username_label'}>{props.username}</p>
            <div style={{ display: 'flex' }}>
               <InfoIcon modal={showRules} icon={rulesIcon} />
               <InfoIcon modal={showRanking} icon={trophyIcon} />
            </div>
         </div>

         {
            state.openRules ? <UiModal title={'Rules'}>
               <ul>
                  <li>
                     <UiRuleIcon icon={pancakesIcon} /> wins against <UiRuleIcon icon={hamburgerIcon} /> <UiRuleIcon icon={croissantIcon} />
                  </li>
                  <li>
                     <UiRuleIcon icon={hamburgerIcon} /> wins against <UiRuleIcon icon={croissantIcon} /> <UiRuleIcon icon={paellaIcon} />
                  </li>
                  <li>
                     <UiRuleIcon icon={croissantIcon} /> wins against <UiRuleIcon icon={paellaIcon} /> <UiRuleIcon icon={pancakesIcon} />
                  </li>
                  <li>
                     <UiRuleIcon icon={paellaIcon} /> wins against <UiRuleIcon icon={pancakesIcon} /> <UiRuleIcon icon={hamburgerIcon} />
                  </li>
                  <li>
                     <UiRuleIcon icon={pancakesIcon} /> wins against <UiRuleIcon icon={hamburgerIcon} /> <UiRuleIcon icon={croissantIcon} />
                  </li>
               </ul>
               <UiButton label={'Close'} callback={closeRules} />
            </UiModal> : ''
         }

         {
            state.openRanking ? <UiModal title={'Ranking'}>
               <ul>
                  <li className={'player-item darker'}>
                     <span>Name</span> <span>Score</span>
                  </li>
                  {playerData.map(renderPlayerData)}
               </ul>
               <UiButton label={'Close'} callback={closeRanking} />
            </UiModal> : ''
         }

      </>
   )
}

export default UserBar