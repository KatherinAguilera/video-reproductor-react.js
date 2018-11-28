import React, { Component } from 'react';
import VideoPlayerLayout from '../components/video-player-layout';
import Video from '../components/video';
import Title from '../components/title';
import PlayPause from '../components/play-pause';
import Timer from '../components/timer.js';
import Controls from '../components/video-player-controls.js';
import formattedTime from'../../util/timer'

 class VideoPlayer extends Component {
  state = {
    pause: true,
    duration: 0,
    currentTime: 0,
  }
  togglePlay = (event) => {
    this.setState({
      // pause sera lo contario a lo definido
      pause: !this.state.pause
    })
  }
  // componente montado validar play/pause
  componentDidMount() {
    this.setState({
      // si se cumple es true sino es false
      pause: (!this.props.autoplay)
    })
  }
  handleLoadedMetadata = event => {
    // quien dispara el evento
    this.video = event.target;
    this.setState({
      duration: formattedTime(this.video.duration)
    });
  }
  // cuando de actualice el tiempo que hacemos
  handleTimeUpdate = event => {
    // console.log(this.video.currentTime)
    this.setState({
      // currentTime es propiedad de html con su API de media
      currentTime: formattedTime(this.video.currentTime)
    })
  }
  render() {
    return (
      <VideoPlayerLayout>
        <Title
          titulo="Esto es un video chido!"
        />
        <Controls>
          <PlayPause
            // mostrar dependiendo del estado play/pause
            pause={this.state.pause}
            // handleClick de play-pause (props.handleclick)
            //togglePlay sera una funcion
            handleClick={this.togglePlay}
          />
          <Timer
            duration={this.state.duration}
            // pasamos el estado - luego a time.js
            currentTime={this.state.currentTime}
          />
        </Controls>
        <Video
          autoplay={this.props.autoplay}
          // this.state.pause pasando estado de play/pause
          pause={this.state.pause}
          handleLoadedMetadata={this.handleLoadedMetadata}
          handleTimeUpdate={this.handleTimeUpdate}
          src="http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4"
        />
      </VideoPlayerLayout>
    )
  }
}
 export default VideoPlayer;