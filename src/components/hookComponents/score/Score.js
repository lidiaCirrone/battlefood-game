import React from 'react';
import './Score.css';

const Score = (props) => {
   return (
      <div className={`score_label ${props.class}`}>
         <p>{props.name} - {props.score}</p>
      </div>
   )
}

export default Score;