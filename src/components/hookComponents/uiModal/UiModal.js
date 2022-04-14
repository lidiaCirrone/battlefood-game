import React from 'react';
import PropTypes from 'prop-types';


import './UiModal.css';


function UiModal(props) {
   return (
      <div className={'modal-container'}>
         <div className={props.cssClass}>
            {
               props.title ?
                  <h1 className={props.titleClass}>{props.title}</h1>
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
   children: PropTypes.object
}

export default UiModal;