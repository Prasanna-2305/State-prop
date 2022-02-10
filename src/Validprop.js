import React from 'react';
import PropTypes from 'prop-types'
export default class Validprop extends React.Component
{
   render()
   {
       return(
           <div>
               <h1>{this.props.data}</h1>
           </div>
       )
   }
}
   Validprop.propTypes={
    data:PropTypes.number
 }
