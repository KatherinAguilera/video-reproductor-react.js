// crear los componentes
import React from'react';
// redenderizar en el navegador
import { render } from'react-dom';
// Importamos dependencias de React
import Playlist from './src/playlist/componentes/playlist.js'
import data from './src/api.json'
const app = document.getElementById('app');
// Referenciamos un elemento con ID app

const holaMundo = <h1>Hola Mundo de React</h1>;
// Insertamos en una constante lo que queremos renderizar

// (elemento de react o componente de react, )
// render(<Media type="video" title ="Que es responsive design?" author="Katherine Aguilera" image="./images/covers/imagen.jpg"/>, app);
// Le decimos a ReactDOM (que renderizar , y donde renderizar)

// data{los datos que vienen de la api} import data
render(<Playlist data={data} />, app);