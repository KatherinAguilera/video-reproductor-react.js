import React from 'react';
import './modal.css';
 function Modal(props) {
   // los componenetes funcionales no deben manejar eventos sino sus propias propiedades
  return (
    <div className="Modal">
      {props.children}
      <button className="Modal-close" onClick={props.handleClick}></button>
    </div>
  )
}
 export default Modal;