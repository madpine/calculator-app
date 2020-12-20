import React from 'react';
import './Window.css';

export default function Window(props) {

   return (
       <div className="window">
           {props.number}
       </div>
   )
}