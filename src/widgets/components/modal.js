import React from 'react';
import './modal.css';
 function Modal(props) {
   // los componenetes funcionales no deben manejar eventos sino sus propias propiedades
  return (
    <div className="Modal">
      esto es un modal
      {props.children}
      <button onClick={props.handleClick}>cerrar</button>
    </div>
  )
}
 export default Modal;