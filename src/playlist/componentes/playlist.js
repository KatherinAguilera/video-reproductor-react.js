/*componente que se exportara a index*/
import React, { Component } from 'react';
// Importo media para ser utilizado
import Media from './media.js';
import './playlist.css';
// importar mi icono play
import Play from '../../icons/components/play';
import Volume from '../../icons/components/volume';
import Pause from '../../icons/components/pause';
import Fullscreen from '../../icons/components/full-screen';


// 1. Declaro Playlist
function Playlist(props) {
  const playlist = props.data.categories[0].playlist
  console.log(props.data);
  return (
    <div className="Playlist">
      <Play
        size={20}
        color="red"
      />
       <Volume
        size={20}
        color="green"
      />
      <Pause
        size={20}
        color="#01CAFF"
      />
      <Fullscreen
        size={20}
        color="#F25649"
      />
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