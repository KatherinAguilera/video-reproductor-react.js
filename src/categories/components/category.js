import React from 'react';
import Playlist from '../../playlist/components/Playlist.jsx';

function Category(props) {
  return (
    <div>
      <p>{props.description}</p>
      <h2>{props.title}</h2>
      {/* importando del playlist */}
      <Playlist
        playlist={props.playlist}
      />
    </div>
  )
}

export default Category;