import React from 'react';
 import './title.css';
 function Title(props) {
  return (
    <div className="Title">
      <h2>{props.titulo}</h2>
    </div>
  )
}
 export default Title;