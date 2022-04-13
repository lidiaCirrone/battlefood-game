import React from 'react';
import PropTypes from 'prop-types';

// COMPONENTS
import UiButton from '../uiButton/UiButton';

// STYLES
import './UiModal.css';


function UiModal(props) {
   return (
      <div className={'modal-container'}>
         <div className={props.cssClass}>
            {
               props.title ? 
               <h1>{props.title}</h1>
               : ''
            }
            {props.children}
         </div>
      </div>
   )
}

UiModal.defaultProps = {
   title: 'Title',
   cssClass: 'modal-content'
}

UiModal.propTypes = {
   title: PropTypes.string.isRequired,
   children: PropTypes.element
}

export default UiModal;