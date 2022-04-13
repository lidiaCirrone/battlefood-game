import React from 'react';
import PropTypes from 'prop-types';


const UiGameIcon = ({ circleSize, icon, size, name, getIcon, modal }) => {

   const iconCallback = () => {
      getIcon(name);
   }

   return (
      <div style={{
         backgroundColor: 'rgba(23, 23, 43, 0.2)',
         borderRadius: '50%',
         width: circleSize,
         height: circleSize,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         cursor: 'pointer'
      }}>
         <picture onClick={iconCallback}>
            <img src={icon} alt="Icon" style={{
               width: size,
               height: size
            }} />
         </picture>

      </div>
   )

}

UiGameIcon.defaultProps = {
   size: 40,
   circleSize: 70
}

UiGameIcon.propTypes = {
   icon: PropTypes.string.isRequired,
   size: PropTypes.number,
   circleSize: PropTypes.number
}

export default UiGameIcon;





// {/* <source media="(min-width:650px)" srcSet={props.icon} />
//                 <source media="(min-width:465px)" srcSet={props.icon} /> */}


