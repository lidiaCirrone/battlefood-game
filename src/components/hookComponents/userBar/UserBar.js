import React, { useState } from 'react'

import './userBar.css'

import InfoIcon from '../infoIcon/InfoIcon';
import UiModal from '../uiModal/UiModal';
import UiButton from '../uiButton/UiButton';

import { rulesIcon, trophyIcon } from '../../../utils/utils';


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

   return (
      <>

         <div className="player_bar">
            <p className={'username_label'}>username</p>
            <div style={{ display: 'flex' }}>
               <InfoIcon modal={showRules} icon={rulesIcon} />
               <InfoIcon modal={showRanking} icon={trophyIcon} />
            </div>
         </div>

         {
            state.openRules ? <UiModal title={''}>
               <p>regoleeeeeee</p>
               <UiButton label={'Close'} callback={closeRules}/>
            </UiModal> : ''
         }

         {
            state.openRanking ? <UiModal title={''}>
               <p>map delle partite in classifica</p>
               <UiButton label={'Close'} callback={closeRanking} />
            </UiModal> : ''
         }

      </>
   )
}

export default UserBar