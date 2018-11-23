/*componente que se exportara a index*/
import React, { Component } from 'react';
// Importo media para ser utilizado
import Media from './media.js';
import './playlist.css';
// 1. Declaro Playlist
function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
      {
        playlist.map((item) => {
          return <Media {...item} key={item.id} />
        })
      }
    </div>
  )
}
// 2. Exporto para se utilizada
export default Playlist;