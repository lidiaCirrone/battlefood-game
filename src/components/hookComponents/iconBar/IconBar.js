import React from 'react'

import './IconBar.css'

import UiGameIcon from '../uiGameIcon/UiGameIcon'

import { pancakesIcon, hamburgerIcon, croissantIcon, paellaIcon } from '../../../utils/utils';


const IconBar = ({ getIcon }) => {

   return (
      <>
         <div className='icon_bar'>
            <UiGameIcon icon={pancakesIcon} name={'pancakes'} getIcon={getIcon} />
            <UiGameIcon icon={hamburgerIcon} name={'hamburger'} getIcon={getIcon} />
            <UiGameIcon icon={croissantIcon} name={'croissant'} getIcon={getIcon} />
            <UiGameIcon icon={paellaIcon} name={'paella'} getIcon={getIcon} />
         </div>
      </>
   )
}

export default IconBar

