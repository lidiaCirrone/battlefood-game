import React from 'react';
import './Score.css';

const Score = (props) => {
   return (
      <div className={'score_label'}>
         {props.user}
      </div>
   )
}

export default Score;