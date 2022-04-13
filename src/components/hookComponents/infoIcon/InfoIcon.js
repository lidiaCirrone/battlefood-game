import React from 'react';
import PropTypes from 'prop-types';


const InfoIcon = ({ circleSize, icon, size, name, modal }) => {

   const iconCallback = () => {
      modal();
   }

   return (
      <div style={{
         backgroundColor: '#333',
         borderRadius: '50%',
         width: circleSize,
         height: circleSize,
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',
         marginLeft: '10px'
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

InfoIcon.defaultProps = {
   size: 20,
   circleSize: 45
}

InfoIcon.propTypes = {
   // icon: PropTypes.string.isRequired,
   size: PropTypes.number,
   circleSize: PropTypes.number
}

export default InfoIcon;





// {/* <source media="(min-width:650px)" srcSet={props.icon} />
//                 <source media="(min-width:465px)" srcSet={props.icon} /> */}


