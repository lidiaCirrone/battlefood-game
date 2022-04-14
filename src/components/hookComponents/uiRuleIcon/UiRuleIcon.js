import React from 'react';
import PropTypes from 'prop-types';

import './UiRuleIcon.css';


const UiRuleIcon = (props) => {

   return (
         <picture>
            <img src={props.icon} alt="Icon" style={{
               width: props.size,
               height: props.size
            }} />
         </picture>
   )

}

UiRuleIcon.defaultProps = {
   size: 20
}

UiRuleIcon.propTypes = {
   icon: PropTypes.string.isRequired,
   size: PropTypes.number
}

export default UiRuleIcon;





// {/* <source media="(min-width:650px)" srcSet={props.icon} />
//                 <source media="(min-width:465px)" srcSet={props.icon} /> */}


